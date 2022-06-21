const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    clientCode: { type: Number },
    stationCode: { type: Number },
    amount: { type: Number },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("Data", dataSchema);
