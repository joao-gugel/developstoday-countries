import api from "./base";

const getAllCountries = async () => api("/countries", "GET");

const getCountryByCode = async (code: string) =>
  api(`/countries/${code}`, "GET");

export { getAllCountries, getCountryByCode };
