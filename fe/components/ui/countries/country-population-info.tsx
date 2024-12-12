import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";

type CountryPopulationInfoProps = {
  countryData: CountryData;
};

export default function CountryPopulationInfo({
  countryData,
}: CountryPopulationInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Population Growth</CardTitle>
        <CardDescription>Historical population data of Andorra</CardDescription>
      </CardHeader>
      <CardContent className="max-h-[400px]">
        <ChartContainer
          config={{
            population: {
              label: "Population",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={countryData.population}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="value" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
