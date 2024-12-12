import Link from "next/link";

import { Button } from "../button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";

import { ArrowRight } from "lucide-react";

type CountryCardProps = {
  countryCode: string;
  name: string;
};

export default function CountryCard({ countryCode, name }: CountryCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>Country Code: {countryCode}</CardDescription>
      </CardHeader>
      <div className="h-[1px] bg-gray-200"></div>
      <CardFooter className="justify-end mt-5">
        <Link href={`/countries/${countryCode}`}>
          <Button>
            View Details <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
