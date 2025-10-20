function Phonebook({
  handleNewNameSubmit,
  handleNewNameInput,
  newName,
  handleNewNumberInput,
  newNumber,
}) {
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewNameSubmit}>
        <div>
          name: <input onChange={handleNewNameInput} value={newName} />
          <br />
          number: <input onChange={handleNewNumberInput} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default Phonebook;
