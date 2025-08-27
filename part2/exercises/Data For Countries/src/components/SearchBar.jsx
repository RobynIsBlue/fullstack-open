function SearchBar({ filterTerm, setFilterTerm }) {
  return (
    <div>
      <label>
        Country Filter:
        <input
          onChange={(event) => setFilterTerm(event.target.value.toLowerCase())}
          value={filterTerm}
        />
      </label>
    </div>
  );
}
export default SearchBar;
