import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import Numbers from "./components/Numbers";
import axios from "axios";
import numbersService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    numbersService.getAll().then((response) => setPersons(response));
  });

  const handleNewNameSubmit = (event) => {
    event.preventDefault();
    const checkExistingPerson = persons.find(
      (person) => person.name === newName
    );
    if (checkExistingPerson) {
      if (checkExistingPerson.number === newNumber) {
        alert(`${newName} is already added to the phonebook`);
        return;
      }
      if (
        confirm(
          `${newName} is already added to the phonebook with the number ${checkExistingPerson.number}. Would you like to change it to ${newNumber}?`
        )
      ) {
        numbersService.update(
          { name: newName, number: newNumber },
          checkExistingPerson.id
        );
      }
      return;
    }
    if (newName === "") {
      alert("Please input a name");
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    numbersService
      .create(newPerson)
      .then((r) => {
        setPersons(persons.concat(r));
        setNewName("");
        setNewNumber("");
      })
      .catch(() => {
        alert("could not load persons");
      });
  };

  const handleNewNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleDelete = (id) => {
    numbersService.deletePerson(id);
  };

  return (
    <div>
      <Filter setFilterTerm={setFilterTerm} filterTerm={filterTerm} />
      <Phonebook
        handleNewNameInput={handleNewNameInput}
        newName={newName}
        handleNewNumberInput={handleNewNumberInput}
        newNumber={newNumber}
        handleNewNameSubmit={handleNewNameSubmit}
      />
      <Numbers
        filterTerm={filterTerm}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
