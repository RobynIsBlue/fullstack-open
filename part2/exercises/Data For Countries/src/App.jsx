import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [filterTerm, setFilterTerm] = useState("");

  console.log(filterTerm);

  return (
    <div>
      <SearchBar filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <CountryList filterTerm={filterTerm} />
    </div>
  );
}
export default App;
