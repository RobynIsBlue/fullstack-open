function Numbers({ persons, filterTerm }) {
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
          </p>
        ))}
    </div>
  );
}

export default Numbers;
