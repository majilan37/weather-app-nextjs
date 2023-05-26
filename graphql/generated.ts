export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Time: any;
};

export type CurrentWeather = {
  __typename?: 'CurrentWeather';
  is_day?: Maybe<Scalars['Int']>;
  temperature?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['DateTime']>;
  weathercode?: Maybe<Scalars['Int']>;
  winddirection?: Maybe<Scalars['Int']>;
  windspeed?: Maybe<Scalars['Float']>;
};

export type Daily = {
  __typename?: 'Daily';
  apparent_temperature_max?: Maybe<Array<Maybe<Scalars['Float']>>>;
  apparent_temperature_min?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sunrise?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  sunset?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  temperature_2m_max?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature_2m_min?: Maybe<Array<Maybe<Scalars['Float']>>>;
  time?: Maybe<Array<Maybe<Scalars['Date']>>>;
  uv_index_clear_sky_max?: Maybe<Array<Maybe<Scalars['Float']>>>;
  uv_index_max?: Maybe<Array<Maybe<Scalars['Float']>>>;
  weathercode?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DailyUnits = {
  __typename?: 'DailyUnits';
  apparent_temperature_max?: Maybe<Scalars['String']>;
  apparent_temperature_min?: Maybe<Scalars['String']>;
  sunrise?: Maybe<Scalars['String']>;
  sunset?: Maybe<Scalars['String']>;
  temperature_2m_max?: Maybe<Scalars['String']>;
  temperature_2m_min?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  uv_index_clear_sky_max?: Maybe<Scalars['String']>;
  uv_index_max?: Maybe<Scalars['String']>;
  weathercode?: Maybe<Scalars['String']>;
};

export type Hourly = {
  __typename?: 'Hourly';
  apparent_temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dewpoint_2m?: Maybe<Array<Maybe<Scalars['Float']>>>;
  precipitation?: Maybe<Array<Maybe<Scalars['Int']>>>;
  precipitation_probability?: Maybe<Array<Maybe<Scalars['Int']>>>;
  rain?: Maybe<Array<Maybe<Scalars['Int']>>>;
  relativehumidity_2m?: Maybe<Array<Maybe<Scalars['Int']>>>;
  showers?: Maybe<Array<Maybe<Scalars['Int']>>>;
  temperature_2m?: Maybe<Array<Maybe<Scalars['Float']>>>;
  time?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  uv_index?: Maybe<Array<Maybe<Scalars['Float']>>>;
  uv_index_clear_sky?: Maybe<Array<Maybe<Scalars['Float']>>>;
  weathercode?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type HourlyUnits = {
  __typename?: 'HourlyUnits';
  apparent_temperature?: Maybe<Scalars['String']>;
  dewpoint_2m?: Maybe<Scalars['String']>;
  precipitation?: Maybe<Scalars['String']>;
  precipitation_probability?: Maybe<Scalars['String']>;
  rain?: Maybe<Scalars['String']>;
  relativehumidity_2m?: Maybe<Scalars['String']>;
  showers?: Maybe<Scalars['String']>;
  temperature_2m?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
  uv_index?: Maybe<Scalars['String']>;
  uv_index_clear_sky?: Maybe<Scalars['String']>;
  weathercode?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  myQuery?: Maybe<Root>;
};


export type QueryMyQueryArgs = {
  current_weather?: InputMaybe<Scalars['String']>;
  daily?: InputMaybe<Scalars['String']>;
  hourly?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
};

export type Root = {
  __typename?: 'Root';
  current_weather?: Maybe<CurrentWeather>;
  daily?: Maybe<Daily>;
  daily_units?: Maybe<DailyUnits>;
  elevation?: Maybe<Scalars['Int']>;
  generationtime_ms?: Maybe<Scalars['Float']>;
  hourly?: Maybe<Hourly>;
  hourly_units?: Maybe<HourlyUnits>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_abbreviation?: Maybe<Scalars['String']>;
  utc_offset_seconds?: Maybe<Scalars['Int']>;
};
