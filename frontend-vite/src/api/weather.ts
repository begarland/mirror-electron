export const fetchCurrentWeather = async () => {
  const currentWeather = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=40.4375135&lon=-104.9373244&appid=165ec9ae94ade25e270be163f5edeecb&units=imperial"
  );

  const data = await currentWeather.json();

  console.log("currentWeather", data);
  return data;
};
