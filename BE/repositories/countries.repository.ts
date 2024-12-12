/*
 * SIMULATING A COUNTRIES DATABASE REPOSITORY
 */
import axios from "axios";

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
};
