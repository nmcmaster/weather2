import React, { useState, useEffect } from "react";
import axios from "axios";

function Forecast(props) {
  const [forecast, setForecast] = useState("");
  const [data, setData] = useState({ hits: [] });

  const apiKey = "db51a3b4c19848e3902191949192004";
  const forecastUrl = "https://api.apixu.com/v1/forecast.json?key=";
  let zipcode = 11385;
  let weiruch = "https://hn.algolia.com/api/v1/search?query=redux";

  const urlToFetch = forecastUrl + apiKey + "&q=" + zipcode;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        weiruch
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Forecast;
