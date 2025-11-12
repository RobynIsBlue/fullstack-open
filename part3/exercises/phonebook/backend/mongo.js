require("dotenv").config();
const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("must enter password");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://App:${password}@cluster0.4jb5aqm.mongodb.net/entries?appName=Cluster0`;

console.log(url);

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Note = mongoose.model("Note", noteSchema);

if (process.argv.length == 3) {
  Note.find({}).then((result) => {
    result.forEach((note) => {
      console.log(note);
    });
    mongoose.connection.close();
  });
} else {
  const name = process.argv[3];
  const number = process.argv[4];

  const note = new Note({
    name: name,
    number: number,
  });

  note.save().then((result) => {
    console.log(`Saved ${name} with number ${number} to phonebook.`);
    mongoose.connection.close();
  });
}
// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });
