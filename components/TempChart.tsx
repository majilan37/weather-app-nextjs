"use client";

import type { Query } from "@/graphql/generated";
import { AreaChart, Card, Title } from "../tremor";
import { Suspense } from "react";

interface Props {
  data: Query["myQuery"];
}

function TempChart({ data }: Props) {
  const hourly = data?.hourly?.time
    ?.map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const _data = hourly?.map((hour, index) => ({
    time: Number(hour),
    "UV index": data?.hourly?.uv_index![index]!,
    "Temperature (C)": data?.hourly?.temperature_2m![index],
  }));

  const dataFormatter = (n: number) => `${n} °C`;

  return (
    <Card>
      <Title>Temperature & UV Index</Title>
      <Suspense fallback={<>Loading...</>}>
        <AreaChart
          className="mt-6"
          data={_data ?? []}
          showLegend
          index="time"
          categories={["Temperature (C)", "UV index"]}
          colors={["yellow", "rose"]}
          minValue={0}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Suspense>
    </Card>
  );
}

export default TempChart;
