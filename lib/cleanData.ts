import { CurrentWeather, Hourly, Query, Root } from "@/graphql/generated";

export default function cleanData(data: Query["myQuery"], city: string) {
  const {
    current_weather,
    timezone,
    hourly,
    hourly_units,
    timezone_abbreviation,
  } = data as Root;

  const { temperature, windspeed, winddirection, weathercode, time } =
    current_weather as CurrentWeather;

  const {
    temperature_2m,
    rain,
    relativehumidity_2m,
    precipitation_probability,
    uv_index,
  } = hourly as Hourly;

  return {
    current_weather: {
      temperature,
      windspeed,
      winddirection,
      time,
      weathercode,
    },
    hourly: {
      temperature_2m: temperature_2m?.slice(0, 24),
      rain: rain?.slice(0, 24),
      relativehumidity_2m: relativehumidity_2m?.slice(0, 24),
      precipitation_probability: precipitation_probability?.slice(0, 24),
      uv_index: uv_index?.slice(0, 24),
    },
    timezone,
    city,
    hourly_units,
    timezone_abbreviation,
  };
}
