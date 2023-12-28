const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const productdb = new mongoose.model("products", productSchema);
module.exports = productdb;
