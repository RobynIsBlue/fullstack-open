const express = require("express");
const morgan = require("morgan");
const Note = require("./models/note");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
morgan.token("borb", function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :borb")
);
app.use(express.static("dist"));

app.get("/api/persons", (request, response) => {
  Note.find({}).then((entries) => {
    response.json(entries);
  });
});

app.get("/info", (request, response) => {
  const date = Date().toLocaleString();
  const noteFindLength = Note.find({})
    .then((res) => res.length)
    .then((res) =>
      response.send(
        `<div>
        <p>Phonebook has info for ${res} people</p>
        <p>${date}</p>
    </div>`
      )
    );
});

app.get("/api/persons/:id", (request, response) => {
  Note.findById(request.params.id).then((entries) => {
    if (entries.length == 0) {
      console.log("no entries");
      return response.send(`<div> This info does not exist! </div>`);
    }
    response.json(entries);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  Note.findByIdAndDelete(request.params.id)
    .then((entries) => {
      console.log("deleted!");
      response.status(201).end();
    })
    .catch("was not deleted");
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "Missing name and/or number",
    });
  }

  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({
      erorr: "Name already exists",
    });
  }

  const person = new Note({
    name: body.name,
    number: body.number,
  });

  person.save().then((result) => {
    console.log(`saved ${result}!`);
  });

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
