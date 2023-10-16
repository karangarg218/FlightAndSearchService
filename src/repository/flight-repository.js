const {Flights} = require('../models/index')
const {Op} = require("sequelize");
const {query} = require("express");

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    {price: {[Op.gte]: data.minPrice}},
                    {price: {[Op.lte]: data.maxPrice}},

                ]
            })
        }


        if (data.minPrice) {
            Object.assign(filter, {
                    price: {
                        [Op.gte]: data.minPrice
                    }
                }
            )
        }
        if (data.maxPrice) {
            Object.assign(filter, {
                price: {
                    [Op.lte]: data.maxPrice
                }
            })
        }
        console.log(filter)
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (Err) {
            throw {Err}
        }

    }

    async getFlight(flightNumber) {
        try {
            const flight = Flights.findByPk(flightNumber);

        } catch (error) {
            console.log(`error in service layer :${error}`)
        }
    }

    async getAll(filter) {
        try {
            const filterObject = this.#createFilter(filter)
            const flight = await Flights.findAll({
                where: filterObject
            })
            return flight;
        } catch (err) {
            console.log(err)
        }
    }
}


module.exports = FlightRepository;

/*
flightNumber
airplaneId
departureAirportId
arrivalAirportId
arrivalTime
departureTime
price
boardingGate
totalSeats
*/