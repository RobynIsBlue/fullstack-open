import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

function SingleCountry({ name }) {
  const [country, setCountry] = useState({});
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
      .then((value) => {
        setCountry(value);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              value.data.latlng[0]
            }&lon=${value.data.latlng[1]}&appid=${
              import.meta.env.VITE_WEATHER_KEY
            }&units=metric`
          )
          .then((value) => setWeatherInfo(value));
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
      <h2>Weather</h2>
      {console.log(weatherInfo)}
      {weatherInfo !== null && <Weather weatherInfo={weatherInfo} />}
    </div>
  );
}

export default SingleCountry;
