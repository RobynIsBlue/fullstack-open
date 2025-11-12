require("dotenv").config();
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log(url);

mongoose.set("strictQuery", false);

mongoose
  .connect(url)
  .then(console.log("successfully connected!"))
  .catch("error connecting!");

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
});

module.exports = mongoose.model("Note", noteSchema);
