const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Item", ItemsSchema);
