require("dotenv").config();
const data = require("../data");
const Data = require("../models/data.model");
const mongoose = require("mongoose");
const DB_NAME = "prova2i";

mongoose
  .connect("mongodb+srv://admin:prova2i@cluster0.gemfy0v.mongodb.net/2idb")
  .then(() => {
    console.log("Connected to database only to fill information");

    Data.insertMany(data).then((insertedData) => {
      console.log(`${insertedData.length} data inserted.`);

      mongoose.disconnect();
    });
  })
  .catch((error) => console.error(error));
