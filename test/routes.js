const express = require("express");
const multer = require("multer");
const foodModel = require("./models/food");
const app = express();
const path = require('path')
const fs = require("fs");

app.get("/foods", async (request, response) => {
  var foods = await foodModel.find({}).populate('vID').lean();
  foods.forEach(
    f=>{
      console.log(f);
      if(f.img){
        console.log(f.img.data);
        f["image"]=`<img src="data:image/jpeg;base64,${f.img.data.toString("base64")}" />`;
      }
    }
  )
  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });

app.post('/food', upload.single('image'), (req, res, next) => {
  console.log(__dirname + '/uploads/' + req.file.filename);
  var obj = {
      name: req.body.name,
      img: {
          data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
          contentType: 'image/jpeg'
      }
  }
  console.log(obj);
  foodModel.create(obj, (err, item) => {
      if (err) {
          console.log(err);
      }
      else {
          // item.save();
          res.redirect('/');
      }
  });
});

// app.post("/food", async (request, response) => {

   
//     // try {
//     //   await food.save();
//     //   response.send(food);
//     // } catch (error) {
//     //   response.status(500).send(error);
//     // }
//   });

  app.put("/food", async (request, response) => {
    try {
      console.log(request.body);
      const model = await foodModel.findByIdAndUpdate(request.body._id, request.body);
      await model.save();
      response.send(model);
    } catch (error) {
        console.log(error);
      response.status(500).send(error);
    }
  });

  app.delete("/food/:id", async (request, response) => {
    try {
      const food = await foodModel.findByIdAndDelete(request.params.id);
  
      if (!food) response.status(404).send("No item found");
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;