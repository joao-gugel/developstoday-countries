import express from "express";
import cors from "cors";

import countriesController from "./controllers/countries.controller";

const PORT = 8000;

const server = express();

server.use(express.json());
server.use(cors());

server.get("/countries", countriesController.getAvailableCountries);
server.get("/countries/:id", countriesController.getCountryInfo);

server.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
