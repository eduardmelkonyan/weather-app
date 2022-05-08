const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=38f9e00555abb723a501b41e80cb0d7a&query=" +
    longitude +
    "," +
    latitude +
    "&units=m";
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          ". It is currently " +
          response.body.current.temperature +
          " degress out. It feels like " +
          response.body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
