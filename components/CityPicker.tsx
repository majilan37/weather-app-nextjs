"use client";
import type { Merge } from "@/types";
import { City, Country } from "country-state-city";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";

type CountryType = (typeof options)[0] | null;

type CityType<T> =
  | (Merge<
      { value: T },
      { name: string; stateCode: string; countryCode: string }
    > & { label: string })
  | null;

const options = Country.getAllCountries().map((c) => ({
  value: {
    latitude: c.latitude,
    longitude: c.longitude,
    isoCode: c.isoCode,
  },
  label: c.name,
}));

function CityPicker() {
  type _City = CityType<(typeof _options)[0]["value"]>;

  const [selectedCountry, setSelectedCountry] = useState<CountryType>(null);
  const [selectedCity, setSelectedCity] = useState<_City>(null);

  const router = useRouter();

  const handleSelectedCountry = (option: CountryType) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: _City) => {
    setSelectedCity(option);

    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  const _options = useMemo(() => {
    return (
      City.getCitiesOfCountry(selectedCountry?.value.isoCode || "")?.map(
        (city) => ({
          value: {
            latitude: city.latitude,
            longitude: city.longitude,
            countryCode: city.countryCode,
            stateCode: city.stateCode,
            name: city.name,
          },
          label: city.name,
        })
      ) ?? []
    );
  }, [selectedCountry?.value.isoCode]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            // @ts-ignore
            options={_options}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
