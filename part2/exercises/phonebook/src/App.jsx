import { useState } from "react";
import Filter from "./components/Filter";
import Phonebook from "./components/Phonebook";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Kindred", number: "69-420" },
    { name: "Vex" },
    { name: "Yunara" },
    { name: "Kinder" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const handleNewNameSubmit = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    if (newName === "") {
      alert("Please input a name");
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  const handleNewNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberInput = (event) => {
    setNewNumber(event.target.value);
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
      <Numbers filterTerm={filterTerm} persons={persons} />
    </div>
  );
};

export default App;
