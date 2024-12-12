type Country = {
  countryCode: string;
  name: string;
};

type Border = {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
};

type PopulationData = {
  year: number;
  value: number;
};

type CountryData = {
  countryName: string;
  countryCode: string;
  borders: Border[];
  population: PopulationData[];
  flagUrl: string;
};
