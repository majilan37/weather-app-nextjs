"use client";
import { Query } from "@/graphql/generated";
import { AreaChart, Card, Title } from "../tremor";
import { Suspense } from "react";

interface Props {
  data: Query["myQuery"];
}

function RainChart({ data }: Props) {
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
    "Rain (%)": data?.hourly?.precipitation_probability![index]!,
  }));

  const dataFormatter = (n: number) => `${n}`;

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <Suspense fallback={<>Loading...</>}>
        <AreaChart
          className="mt-6"
          data={_data ?? []}
          showLegend
          index="time"
          categories={["Rain (%)"]}
          colors={["blue"]}
          minValue={0}
          maxValue={100}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Suspense>
    </Card>
  );
}

export default RainChart;
