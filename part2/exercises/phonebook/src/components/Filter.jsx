function Filter({ setFilterTerm, filterTerm }) {
  return (
    <div>
      <h2>Filter</h2>
      <div>
        <p>Filter term: </p>
        <input
          onChange={(event) => setFilterTerm(event.target.value)}
          value={filterTerm}
        />
      </div>
    </div>
  );
}

export default Filter;
