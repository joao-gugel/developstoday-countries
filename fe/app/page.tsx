"use client";

import CountryCard from "@/components/ui/countries/country-card";
import { Input } from "@/components/ui/input";

import { Frown } from "lucide-react";

import { useEffect, useMemo, useState } from "react";

import { getAllCountries } from "./api/countries";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getAllCountries()
      .then((data) => setCountries(data.countries))
      .catch(() => alert("Some error occurred"))
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [countries, search]);

  if (isLoading)
    return (
      <p className="text-muted-foreground text-center text-lg mt-5">
        Loading...
      </p>
    );

  return (
    <main className="flex flex-col items-center gap-y-8 px-5">
      <h1 className="mt-10 font-semibold text-xl text-center">
        Welcome to the Countries App
      </h1>
      <Input
        className="max-w-md"
        placeholder="Search for a country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2 className="text-lg font-semibold">Available Countries</h2>
      {filteredCountries.length === 0 ? (
        <p className="text-muted-foreground text-center flex items-center gap-2">
          No countries found <Frown />
        </p>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px]">
          {filteredCountries.map((country) => (
            <CountryCard key={country.countryCode} {...country} />
          ))}
        </div>
      )}
    </main>
  );
}
