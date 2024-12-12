import {Request, Response} from "express"

export default {
    getAvailableCountries(req: Request, res: Response) {
        res.send("oii")
    },

    getCountryInfo(req: Request, res: Response) {
        res.send(req.params.id)
    }
}