const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

forecast(41.404625, 43.489552, (error, data) => {
  console.log("Eror:", error);
  console.log("Data:", data);
});

geocode("Akhalkalaki", (error, data) => {
  console.log("Error:", error);
  console.log("Data:", data);
});
