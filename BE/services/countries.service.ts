import countriesRepository from "../repositories/countries.repository";

export default {
  async findCountries() {
    try {
      const countries = await countriesRepository.getCountries();
      return countries;
    } catch (error) {
      throw error;
    }
  },

  async findCountryInfo(countryCode: string) {
    try {
      const countryInfo = await countriesRepository.getCountryInfo(countryCode);
      return countryInfo;
    } catch (error) {
      throw error;
    }
  },
};
