import countriesService from "../services/countries.service";
import { Request, Response } from "express";

export default {
  async getAvailableCountries(req: Request, res: Response) {
    try {
      const countries = await countriesService.findCountries();
      res.json({ countries }).send();
    } catch (err) {
      res.send().status(500);
    }
  },

  async getCountryInfo(req: Request, res: Response) {
    const countryId = req.params.id;

    if (!countryId) res.json({ error: "No countryId provided" }).status(400);

    const countryInfo = await countriesService.findCountryInfo(countryId);
  },
};
