const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes");
const bodyParser = require("body-parser");

const app = express();

// app.use(express.json());
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

mongoose.connect(
  "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});