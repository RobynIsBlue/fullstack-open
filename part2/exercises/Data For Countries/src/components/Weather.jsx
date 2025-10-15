function Weather({ weatherInfo }) {
  console.log(weatherInfo);
  return (
    <div>
      <p>Temperature is {weatherInfo.data.main.temp} C</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherInfo.data.weather[0].icon}.png`}
      />
      <p>Wind: {weatherInfo.data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
