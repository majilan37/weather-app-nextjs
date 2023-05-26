import type { Color } from "@tremor/react";
import { Card, Text, Metric } from "../tremor";

interface Props {
  title: string;
  metric: string;
  color: Color;
}

function StatCard({ title, metric, color }: Props) {
  return (
    <Card decoration="top" decorationColor={color}>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
}

export default StatCard;
