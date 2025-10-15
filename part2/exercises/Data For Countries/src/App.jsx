import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import { useState } from "react";

function App() {
  const [filterTerm, setFilterTerm] = useState("");

  console.log(filterTerm);
  console.log("Weather:", import.meta.env.VITE_WEATHER_KEY);

  return (
    <div>
      <SearchBar filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <CountryList filterTerm={filterTerm} />
    </div>
  );
}
export default App;
