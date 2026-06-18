

function WeatherDay(props) {
  return (
    <div className="card p-3 mt-3">
      <p>Date: {props.day.date}</p>
      <p>{props.day.description}</p>
    </div>
  );
}

function Weather(props) {
  return (
    <section>
      <h3>Weather Forecast</h3>

      {props.weather.map((day, index) => (
        <WeatherDay day={day} key={index} />
      ))}
    </section>
  );
}

export default Weather;