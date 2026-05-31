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
**Version**: 1.0.5

## Overview
A React web app that searches cities and outputs restaurants; uses the Axios library; makes requests for data from a third-party API.

## Getting Started

- create repo on github,
- build app with vite,
- sign up for locationIQ API
- enter `.env` into `.gitignore` file,
- enter API token on `.env`,
- 
## Architecture

- React (jsx, state, components,), npm, axios, bootstrap, react-bootstrap, VS Code (markdown, jsx, .json, html, eslintrc), WSL Ubuntu, netlify, trello, 

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
    - 

    
    
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