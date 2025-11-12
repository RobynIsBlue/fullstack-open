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

app.get("/api/persons", (request, response, next) => {
  Note.find({})
    .then((entries) => {
      response.json(entries);
    })
    .catch((error) => next(error));
});

app.get("/info", (request, response, next) => {
  const date = Date().toLocaleString();
  const noteFindLength = Note.find({})
    .then((res) => res.length)
    .then((res) =>
      response
        .send(
          `<div>
        <p>Phonebook has info for ${res} people</p>
        <p>${date}</p>
    </div>`
        )
        .catch((error) => next(error))
    );
});

app.get("/api/persons/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Note.findByIdAndDelete(request.params.id)
    .then((entries) => {
      console.log("deleted!");
      response.status(201).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  console.log("WEEEEEEEEEEEEEEEEEEEEe");
  console.log(request.params.id);
  Note.findByIdAndUpdate(request.params.id, request.body).then((res) => {
    console.log(res);
  });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    next();

    return response.status(400).json({
      error: "Missing name and/or number",
    });
  }

  const person = new Note({
    name: body.name,
    number: body.number,
  });

  console.log(body.name);
  Note.find({ name: body.name }).then((res) => {
    if (res.length > 0) {
      return;
    }
  });

  person.save().then((result) => {
    console.log(`saved ${result}!`);
  });

  response.json(person);
});

const errorHandler = (error, request, response, next) => {
  console.log(error);

  next(error);
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
