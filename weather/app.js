require("dotenv").config();
const request = require("request");

const darksky_url = "https://api.darksky.net/forecast/" + process.env.DARKSKY + "/37.8267,-122.4233";

const mapbox_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=" + process.env.MAPBOX;

request({url: darksky_url, json: true}, (err, response) => {
    if (err) {
        console.log("Unable to connect to weather service!");
    } else if (response.body.error) {
        console.log("Unable to find location!");
    } else {
        const temp = response.body.currently.temperature;
        const rain = response.body.currently.precipProbability
        console.log("It is currently " + temp + " degrees out. There is a " + rain + "% chance of rain.");
    }
});

request({url: mapbox_url, json: true}, (err, response) => {
    if (err) {
        console.log("Unable to geoencode!");
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location!")
    } else {
        var result = response.body.features[0];

        console.log(result.place_name);
        console.log("Lat: " + result.center[1] + ", Long: " + result.center[0]);
    }
});