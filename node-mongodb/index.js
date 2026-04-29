const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Node + MongoDB running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});