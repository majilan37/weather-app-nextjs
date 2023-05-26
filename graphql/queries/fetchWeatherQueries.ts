import { gql } from "@apollo/client";

export const GET_WEATHER_QUERY = gql`
  query MyQuery(
    $current_weather: String!
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,uv_index,uv_index_clear_sky"
    $latitude: String!
    $timezone: String!
    $longitude: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      timezone: $timezone
      longitude: $longitude
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        temperature_2m_max
        temperature_2m_min
        time
        weathercode
        sunrise
        sunset
      }
      daily_units {
        temperature_2m_max
        temperature_2m_min
        time
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        dewpoint_2m
        apparent_temperature
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;
