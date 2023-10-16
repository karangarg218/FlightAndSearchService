const express= require('express')
const CityController = require('../../controller/cityController')
const FlightController = require('../../controller/flightController')
const AirportController = require('../../controller/airport-controller')
const router = express.Router()

router.post('/city',CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)

router.get('/flights',FlightController.getAll)

router.post('/flights',FlightController.create)

router.post('/airport',AirportController.create)
module.exports=router