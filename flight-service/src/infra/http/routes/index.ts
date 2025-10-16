import { Router } from "express"
import { flightRoutes } from "./flight/flight-routes"


const router = Router()

router.use('/users', flightRoutes)

export { router }