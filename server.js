// Packages
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const methodOverride = require("method-override");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Database Connection

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected Successfully");
  } catch (err) {
    console.error("Failed to connect", err);
  }
}
connectDB();

// Routes

const itemsRoute = require("./controllers/item"); //item.js in controller
app.use("/api", itemsRoute);

// Starting the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
