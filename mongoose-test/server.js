const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes");

const app = express();

app.use(express.json());

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