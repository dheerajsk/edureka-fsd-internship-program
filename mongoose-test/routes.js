const express = require("express");
const foodModel = require("./models/food");
const app = express();

app.get("/foods", async (request, response) => {
  const foods = await foodModel.find({}).populate('vID');
  console.log(foods);
  try {
    response.send(foods);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/food", async (request, response) => {
    const food = new foodModel(request.body);
    food.save().then(
        (res)=>{
            response.send(food);
        }
    )
    // try {
    //   await food.save();
    //   response.send(food);
    // } catch (error) {
    //   response.status(500).send(error);
    // }
  });

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