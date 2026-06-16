import { useState } from 'react';
import axios from 'axios';

import Weather from './Weather';
import Movies from './Movies';

const API_KEY = import.meta.env.VITE_API_KEY;


function Explorer() {
  const [displayResults, setDisplayResults] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({});

  const [weather, setWeather] = useState([]);
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(''); 



  async function handleLocationSearch(event) {
    event.preventDefault();

    setError('');
    setWeather([]);
    setMovies([]);

    try { // LocationIQ request
      const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

      const response = await axios.get(API);
      const cityData = response.data[0];

      setLocation(cityData);
      setDisplayResults(true);

      try { // weather request
        const weatherURL = `http://localhost:3001/weather?lat=${cityData.lat}&lon=${cityData.lon}`;
        const weatherResponse = await axios.get(weatherURL);

        setWeather(weatherResponse.data);
      } catch (error) {
        setError('Weather data is not available for this city.');
      }

      try { // movie request
        const movieURL = `http://localhost:3001/movies?searchQuery=${searchQuery}`;
        const movieResponse = await axios.get(movieURL);

        setMovies(movieResponse.data);
      } catch (error) {
        setError('Films do not exist in this area; Desist all activities citizen!');
      }

    } catch (error) { // Location error
      setDisplayResults(false);
      setLocation({});
      setError('Location data is not available for this search.');
    }
  }

  return (
    <div id="main">
      <form onSubmit={handleLocationSearch} id="search-form">
        <label>Search for a location</label>
        <input 
          type="text" 
          name="search" 
          id="input-search" 
          placeholder="Search for a city!" 
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Explore!</button>
      </form>

      {error && (
        <div className="alert alert-warning mt-3">
          {error}
        </div>
      )}

      {displayResults && location.place_id &&
        <div>
          <div className="card p-3 mt-3">
            <h2>{location.display_name}</h2>
            <p>Latitude: {location.lat}</p>
            <p>Longitude: {location.lon}</p>

            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=13&size=800x500&format=png&markers=icon:large-red-cutout|${location.lat},${location.lon}`}
              alt={`Map of ${location.display_name}`}
              className="img-fluid mt-5 border border-primary"
            />
          
          </div>
          {weather.length > 0 && <Weather weather={weather} />}
          {movies.length > 0 && <Movies movies={movies} />}
        </div>
      }
    </div>
  )
}

export default Explorer;
