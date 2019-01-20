const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bikesSchema = new Schema({
  type: { type: String, required: true },
  geometry: { type: Array, required: true },
  properties: String,
  date: { type: Date, default: Date.now }
});

const Bikes = mongoose.model("Bikes", bikesSchema);

module.exports = Bikes;

