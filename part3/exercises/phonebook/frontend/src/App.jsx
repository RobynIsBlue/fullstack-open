import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import Numbers from "./components/Numbers";
import Notification from "./components/Notification";
import numbersService from "./services/numbers";

const timeOut = (setNotiMessage) => {
  setTimeout(() => {
    setNotiMessage({});
  }, 5000);
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [notiMessage, setNotiMessage] = useState({});

  useEffect(() => {
    numbersService.getAll().then((response) => {
      console.log(response);
      setPersons(response);
    });
  }, []);

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
        const newPerson = { name: newName, number: newNumber };
        numbersService
          .update(newPerson, checkExistingPerson._id)
          .then(
            setPersons(
              //PROBLEM HERE
              persons.reduce((person, current) => {
                if (checkExistingPerson._id == person._id) {
                  return current + newPerson;
                }
                return current + person;
              }, [])
            )
          )
          .then(() => {
            setNotiMessage({
              message: `The number for ${newName} has been changed to ${newNumber}`,
              success: true,
            });
            setNewName("");
            setNewNumber("");
            timeOut(setNotiMessage);
          })
          .catch(() => {
            setNotiMessage({
              message: `${newName} does not exist in the database`,
              success: false,
            });
            setPersons(persons.filter((person) => person.name !== newName));
          });
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
        setNotiMessage({
          message: `The number ${newNumber} has been added under the name ${newName}`,
          success: true,
        });
        setNewName("");
        setNewNumber("");
        timeOut(setNotiMessage);
      })
      .catch(() => {
        setNotiMessage({ message: `Could not load persons`, success: false });
        setTimeout();
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
    setPersons(persons.filter((person) => person._id !== id));
  };

  return (
    <div>
      <Filter setFilterTerm={setFilterTerm} filterTerm={filterTerm} />
      <br />
      <Notification noti={notiMessage} />
      <Phonebook
        handleNewNameInput={handleNewNameInput}
        newName={newName}
        handleNewNumberInput={handleNewNumberInput}
        newNumber={newNumber}
        handleNewNameSubmit={handleNewNameSubmit}
      />
      <br />
      <Numbers
        filterTerm={filterTerm}
        persons={persons}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
