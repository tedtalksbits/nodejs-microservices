import request from "request";
import dotenv from "dotenv";

dotenv.config();

let brooklynLat = 40.6526006;
let brooklynLon = -73.9497211;

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${brooklynLat}&lon=${brooklynLon}&appid=${process.env.API_KEY}`;

let weather = {
  find: (req, res, next) => {
    request(apiUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        response = JSON.parse(body);
        res.send(response);
      } else {
        console.log(response.statusCode + response.body);
        res.send("An error occurred, check the api endpoint");
      }
    });
  },
};

export default weather;
