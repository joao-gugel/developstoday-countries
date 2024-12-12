import countriesService from "../services/countries.service";

import { Request, Response } from "express";

export default {
  async getAvailableCountries(req: Request, res: Response) {
    try {
      const countries = await countriesService.findCountries();
      res.json({ countries });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  async getCountryInfo(req: Request, res: Response) {
    const countryCode = req.params.id;

    try {
      const country = await countriesService.findCountryInfo(countryCode);
      res.json({ country });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};
