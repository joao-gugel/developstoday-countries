/*
 * SIMULATING A COUNTRIES DATABASE REPOSITORY
 */
import axios from "axios";

type NagerCountry = {
  countryCode: string;
  name: string;
};

const dataNagerApi = "https://date.nager.at/api/v3";
const countriesNowApi = "https://countriesnow.space/api/v0.1/countries";

export default {
  async getCountries() {
    try {
      const { data } = await axios.get(`${dataNagerApi}/AvailableCountries`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async getCountryInfo(countryCode: string) {
    try {
      const { data: countriesData } = await axios.get(
        `${dataNagerApi}/AvailableCountries`
      );

      const countryData = await countriesData.find(
        (country: NagerCountry) => country.countryCode == countryCode
      );

      const { data: countryInfo } = await axios.get(`
        ${dataNagerApi}/CountryInfo/${countryCode}`);

      const { data: countryPopulation } = await axios.post(
        `
        ${countriesNowApi}/population`,
        {
          country: countryData.name,
        }
      );

      const { data: countryFlag } = await axios.post(
        `${countriesNowApi}/flag/images`,
        {
          country: countryData.name,
        }
      );

      const populationCounts = countryPopulation.data.populationCounts;
      const countryFlagUrl = countryFlag.data.flag;

      return {
        countryName: countryData.name,
        countryCode: countryCode,
        borders: countryInfo.borders,
        population: populationCounts,
        flagUrl: countryFlagUrl,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
