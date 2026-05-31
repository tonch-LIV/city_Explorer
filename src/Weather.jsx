

function Weather(props) {
  return (
    <section>
      <h3>Weather Forecast</h3>

      {props.weather.map((day, index) => (
        <div className="card p-3 mt-3" key={index}>
          <p>Date: {day.date}</p>
          <p>{day.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Weather;