import { useState, useEffect } from "react";
import axios from "axios";
import SingleCountry from "./SingleCountry";

function CountryList({ filterTerm }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const promiseCountry = async () => {
      let countryPromised = await axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((value) => value.data.map((country) => country.name.common));
      setCountries(countryPromised);
    };
    promiseCountry();
  }, []);

  const countryFilteredList = () => {
    const filteredCountries = countries.filter((country) => {
      return country.toLowerCase().includes(filterTerm);
    });
    if (filteredCountries.length > 10) {
      return <p>Please expand search term</p>;
    }
    if (filteredCountries.length === 1) {
      return <SingleCountry name={filteredCountries[0]} />;
    }
    return (
      <ul>
        {filteredCountries.map((country) => {
          return <li key={country}>{country}</li>;
        })}
      </ul>
    );
  };

  if (countries.length !== 0) {
    countryFilteredList();
  }

  return <div>{countryFilteredList()}</div>;
}
export default CountryList;
