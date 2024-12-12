"use client";

import { Button } from "@/components/ui/button";

import { useParams } from "next/navigation";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { getCountryByCode } from "@/app/api/countries";

import CountryPopulationInfo from "@/components/ui/countries/country-population-info";
import CountryInfo from "@/components/ui/countries/country-info";

export default function CountryPage() {
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCountryByCode(id as string)
      .then((data) => setCountryData(data.country))
      .catch(() => alert("Some error occurred"))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (
      <p className="text-muted-foreground text-center text-lg mt-5">
        Loading...
      </p>
    );

  return (
    <div className="mx-auto max-w-[700px] mt-5 space-y-5 px-5">
      <Link href="/">
        <Button variant={"outline"}>
          <ArrowLeft /> Back to Home
        </Button>
      </Link>
      {countryData ? (
        <>
          <CountryInfo countryData={countryData} />
          <CountryPopulationInfo countryData={countryData} />
        </>
      ) : (
        <p className="text-muted-foreground">
          Nothing found, make sure if the country exists
        </p>
      )}
    </div>
  );
}
