import type { Query } from "@/graphql/generated";
import { weatherCodeToString } from "@/lib/weatherCodeToString";
import Image from "next/image";
import CityPicker from "./Citypicker";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

interface Props {
  city: string;
  lat: string;
  long: string;
  data: Query["myQuery"];
}

type T = keyof typeof weatherCodeToString;

function InformationPanel({ city, lat, long, data }: Props) {
  const index: T = (data?.current_weather?.weathercode as T) ?? 0;

  return (
    <div className="bg-gradient-to-br h-full scrollbar-hide overflow-y-auto md:h-screen md:sticky top-0 left-0 from-[#394f68] to-[#183b7e] text-white p-10 ">
      <div className="pb-5 space-y-2">
        <h1 className="text-5xl font-bold">{decodeURI(city)}</h1>
        <p className="text-xs text-gray-400">
          lat/long: {lat}, {long}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />

      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div className="">
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>

      <hr className="mt-10 mb-5" />

      <div className="flex items-center justify-between">
        <div className="">
          {/* img */}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[index].icon}.png`}
            alt="icon"
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between gap-x-10">
            <p className="text-5xl whitespace-nowrap">
              {data?.current_weather?.temperature?.toFixed(1)} °C
            </p>

            <p className="text-right font-extralight text-lg whitespace-nowrap">
              {/* weather code */}
              {weatherCodeToString[index].label}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885] ">
          <SunIcon className="h-10 w-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date((data?.daily?.sunrise ?? [])![0]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 px-4 py-3 border border-[#6f90cd] rounded-md bg-[#405885] ">
          <MoonIcon className="h-10 w-10 text-gray-400" />

          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunset</p>
            <p className="uppercase text-2xl">
              {new Date((data?.daily?.sunset ?? [])![0]).toLocaleTimeString(
                "en-GB",
                {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
