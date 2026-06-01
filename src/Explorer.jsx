import { useState } from 'react';
import axios from 'axios';

import Weather from './Weather';
// import Map from './Map';
// import Restaurants from './Restaurants';

// import locationData from './fake-data/location.json';
// import restaurantsData from './fake-data/restaurants.json';
// import map from './images/map.png';

const API_KEY = import.meta.env.VITE_API_KEY;


function Explorer() {
  const [displayResults, setDisplayResults] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState({});

  const [weather, setWeather] = useState([]);


  async function handleLocationSearch(event) {
    event.preventDefault();

    const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;

    const response = await axios.get(API);
    const cityData = response.data[0];

    setLocation(cityData);
    setDisplayResults(true);

    const weatherURL = `http://localhost:3001/weather?searchQuery=${searchQuery}&lat=${cityData.lat}&lon=${cityData.lon}`;
    const weatherResponse = await axios.get(weatherURL);

    setWeather(weatherResponse.data);
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

          <Weather weather={weather} />
        </div>
      }
    </div>
  )
}

export default Explorer;
