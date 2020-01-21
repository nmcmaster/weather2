 const stub = {
  request: {
    type: "City",
    query: "New York, United States of America",
    language: "en",
    unit: "m"
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2019-09-07 08:14",
    localtime_epoch: 1567844040,
    utc_offset: "-4.0"
  },
  current: {
    observation_time: "12:14 PM",
    temperature: 9,
    weather_code: 113,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
    ],
    weather_descriptions: ["Sunny"],
    wind_speed: 10,
    //    wind_degree: 349,
    //  wind_dir: "N",
    //    pressure: 1010,
    precip: 13,
    humidity: 90,
    cloudcover: 0,
    feelslike: 13,
    uv_index: 4,
    visibility: 16
  }
};

export default stub;
