# react-maps
Template repository for React projects that work with GIS and/or Shapefile data. This makes use of OpenStreetMaps as well as Leaflet map modules.

## Notes
* This repository is written in Typescript. This is to ensure proper typing of any values used, but it also my preferred language. It is very similar to JavaScript and acts like a fusion between the strict typing of Java, the typing convention of Python, and the usability and function of JavaScript.
* The map must have a rendered height or else it will display with 0 height. No percents, but `vh` (view height) units work.
* As it is a template, it only points at the continental United States.
* Shapefile ingestion via zip has already been implemented. There is no need to write your own.
* Additional documentation included where necessary.

## Sample Uses
* Stripped from this project for queer_hack 2021: [Contact Congress](https://devpost.com/software/contact-congress)
* Population dashboard for your country or state.
* Vaccination maps for the world, country, or region.
