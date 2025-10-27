function Numbers({ persons, filterTerm, handleDelete }) {
  if (persons == null) {
    return;
  }
  console.log(persons);
  return (
    <div>
      <h2>Numbers</h2>
      {persons
        .filter((person) => {
          return [person.name + person.number]
            .join(" ")
            .toLowerCase()
            .includes(filterTerm.toLowerCase());
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </p>
        ))}
    </div>
  );
}

export default Numbers;
