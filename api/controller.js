// import properties from "../package.json";
import weather from "../services/weather.js";

let properties = {
  name: "tedane",
  description: "des",
  author: "author",
};
let { name, description, author } = properties;

let controllers = {
  about: (req, res) => {
    let aboutInfo = {
      name,
      description,
      author,
    };

    res.status(200).json(aboutInfo);
  },
  getWeather: function (req, res) {
    weather.find(req, res, (err, data) => {
      if (err) {
        return res.send(err);
      }
      res.status(200).json(data);
    });
  },
};

export default controllers;
