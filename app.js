const { response } = require("express");
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=38f9e00555abb723a501b41e80cb0d7a&query=New%20York&units=m";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degress out. It feels like " +
        response.body.current.feelslike
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibWVsa29uMTk5OSIsImEiOiJjbDJ0Y3Y2b3kwMzQ0M2ZvMnF0Njhid3V1In0.5hOGNvkZySyhkrFQkIj5Zw&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search");
  } else {
    const latitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    console.log(latitude, longtitude);
  }
});
