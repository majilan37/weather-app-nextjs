import { getClient } from "@/apollo-client";
import { GET_WEATHER_QUERY } from "../../../../../graphql/queries/fetchWeatherQueries";
import { Query, QueryMyQueryArgs } from "@/graphql/generated";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
import cleanData from "@/lib/cleanData";
import getBasePath from "@/lib/getBasePath";

export const revalidate = 60;

interface Props {
  params: { city: string; latitude: string; longitude: string };
  searchParams: {};
}

async function Location({
  params: { city, latitude: lat, longitude: long },
}: Props) {
  const client = getClient();

  const {
    data: { myQuery: data },
  } = await client.query<Query, QueryMyQueryArgs>({
    query: GET_WEATHER_QUERY,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const path = getBasePath();
  const cleaned = cleanData(data, city);
  const res = await fetch(`${path}/api/get-weather-summary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      weatherData: cleaned,
    }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;
  return (
    <div className="grid min-h-screen md:flex ">
      <InformationPanel city={city} lat={lat} long={long} data={data} />

      <div className="flex-1 p-5 lg:p-5">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today's overview </h2>
            <p className="text-sm text-gray-400 ">
              Last updated at:{" "}
              {new Date(data?.current_weather?.time ?? 0).toLocaleString(
                "en-US",
                { dateStyle: "medium", timeStyle: "medium" }
              )}{" "}
              ({data?.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message={content} />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${data?.current_weather?.temperature?.toFixed(1)}°`}
              color="yellow"
            />

            <StatCard
              title="Minimum Temperature"
              metric={`${(data?.daily?.temperature_2m_min ?? [])[0]?.toFixed(
                1
              )}°`}
              color="green"
            />

            <div className="">
              <StatCard
                title="UV Index"
                metric={`${
                  (data?.daily?.uv_index_max ?? [])[0]?.toFixed(0) ?? 7
                }`}
                color="rose"
              />
              {Number((data?.daily?.uv_index_max ?? [])[0]?.toFixed(1) ?? 7) >
                5 && (
                <CalloutCard
                  message="The UV is high today, be sure to wear SPF!"
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${data?.current_weather?.windspeed?.toFixed(1)} m/s`}
                color="cyan"
              />
              <StatCard
                title="Wind Direction"
                metric={`${data?.current_weather?.winddirection?.toFixed(1)} °`}
                color="violet"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />

        <div className="space-y-3">
          <TempChart data={data} />
          <RainChart data={data} />
          <HumidityChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Location;
