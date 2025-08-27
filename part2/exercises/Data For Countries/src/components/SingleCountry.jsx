import axios from "axios";
import { useEffect, useState } from "react";

function SingleCountry({ name }) {
  const [country, setCountry] = useState({});
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then((value) => {
        setCountry(value);
      });
  }, []);

  const listLanguages = (languages) => {
    console.log(Object.values(languages));
    return (
      <ul>
        {Object.values(languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    );
  };

  if (!Object.hasOwn(country, "data")) {
    console.log("failed");
    return null;
  }
  const cD = country.data;
  return (
    <div>
      <h1>{cD.name.common}</h1>
      <h2>Capital:</h2>
      <p>{cD.capital}</p>
      <h3>Area:</h3>
      <p>{cD.area}</p>
      <h2>Languages</h2>
      {listLanguages(cD.languages)}
      <h2>Flag</h2>
      <img src={cD.flags.png}></img>
    </div>
  );
}

export default SingleCountry;
