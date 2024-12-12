import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "../card";

import { Badge } from "../badge";

type CountryInfoProps = {
  countryData: CountryData;
};

export default function CountryInfo({ countryData }: CountryInfoProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">
          {countryData.countryName} ({countryData.countryCode})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Image
            src={countryData.flagUrl}
            alt={`Flag of ${countryData.countryName}`}
            width={120}
            height={70}
            className="rounded-md shadow-md"
          />
          <div>
            <p className="text-sm text-muted-foreground">
              Bordering Countries:
            </p>
            {countryData.borders.length === 0 ? (
              <p>Bordering countries not found</p>
            ) : (
              <div className="flex gap-2 mt-1 flex-wrap">
                {countryData.borders.map((border) => (
                  <Link
                    href={`/countries/${border.countryCode}`}
                    key={border.countryCode}
                  >
                    <Badge className="bg-blue-600 hover:bg-blue-700">
                      {border.commonName}
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
