import countriesRepository from "../repositories/countries.repository";

export default {
  async findCountries() {
    try {
      const countries = await countriesRepository.getCountries();
      return countries;
    } catch (err) {
      throw err;
    }
  },

  findCountryInfo(countryId: string) {},
};
