# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

==========

# Project Name

**Author**: Antonio G.P.
**Version**: 2.0.0

## Overview

City Explorer is a React application that allows users to search for a city and view location information, a static map, weather forecasts, and related movies.

The frontend collects the user's city search, requests location data from LocationIQ, then sends the location information to the backend server for weather and movie data.

## Getting Started

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install
3. Create a .env file with: `VITE_API_KEY=your_locationiq_key`
4. Start the frontend: `npm run dev`
5. Make sure the backend server is also running on: `http://localhost:3001`

## Architecture

This frontend uses:  
React.  
Vite.  
Axios.  
Bootstrap.  
LocationIQ API.  

## Features

Search for a city.  
Display city name, latitude, and longitude.  
Display a static map.  
Display weather forecast data from the backend.  
Display movie data from the backend.  
Show error messages when data is unavailable.  

## Changelog

- Lab0
  - 05.21
    - installed `axios`, `bootstrap` and `react-bootstrap`.
    - added `.env` to `.gitignore`.
    - added locationIQ API.
    - created `Explorer.jsx`, `Footer.jsx`, `Header.jsx`, `Map.jsx`, `Restaurant.jsx`.
    - refined `App.jsx`.
    - added fake-data dir.
  - 05.28
    - imported `axios` in `Explorer.jsx`.
    - created `API_KEY` variable, `searchQuery` and `location` state in `Explorer.jsx`.
    - converted `handleLocationSearch` to `async` in `Explorer.jsx`.
    - removed state, axios, API key, and asyn funct from `App.jsx` since they now will live in `Explorer.jsx`.
    - updated `displayResults` inside return statement.
     - search results display with actual data in live deployment.
    - commented out fake data imports in `Explorer.jsx`.
    - added `mapURL` to produce map when searching.
    - added `<img>` element inside return statement for results and removed `mapURL`.
    - imported `bootstrap` to `main.jsx`.
    - tweaked map zoom in `Explorer.jsx`.
    - map functional and minimally styled; moving work to backend repo.
  - 05.30
    - created `Weather.jsx` component to recieve data and display forecast day and imported into `Explorer.jsx`.
    - created `state` inside `Explorer.jsx`.
    - added url to render weather `weatherURL`.
    - updated `<img> element.
  - 05.31
    - fixed search issue of weather not rendering by switching back to `localhost` from `127.0.0.1`.
    - created `error` statement in `Explorer.jsx`.
  - 06.04
    - clear old results / errors when searching someplace new in `handleLocationSearch`.
    - wrap `weatherURL`, `weatherResponse`, and `setWeather` in `try` and create `setError` in `catch`.
    - dispaying the `{error}` message in `Explorer.jsx`; `<div className="alert..">.
    - hiding Weather heading when no data available.
    - added `try/catch` for better error handling if LocationIP fails.
    - changed `{error}` location to outside `{displayResults...}` and after `<form>`.
  - 06.15
    - cleanup of old comments and redundant code blocks in `Explorer.jsx`.
  - 06.16
    - created `movies, setMovies` in `Explorer.jsx` and added inside `handleLocationSearch();`.
    - created new `try ` / `catch` for movie request.
    - created `Movies.jsx`, `Movies` function and exported it / imported on `Explorer.jsx`.
    - rendered movies in `Explorer.jsx` in return statement.
    - nested `<img>` inside `movie.image_url`; `Movies.jsx`.
  - 06.18
    - created `WeatherDay` and updated `Weather` functions (split displaying the section and day cards); `Weather.jsx`.
    - created `Movie` and updated `Movies` functions (split displaying whole movie section and individual movie cards); `Movies.jsx`.
    - minor cleanup. 
    - README polish.   
    
## Credit and Collaborations

LocationIQ  
WeatherBit  
The Movie Database API  
Code Fellows course materials  

## Time Estimate

For each of the main features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```md
Number and name of feature: _______________Set up react & API keys_________________

Estimate of time needed to complete: ___2 hr__

Start time: __1130___

Finish time: ___0340__

Actual time needed to complete: __3h 10m___

///

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

///

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

///

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

///

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

///
g