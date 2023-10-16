const {FlightRepository, AirplaneRepository} = require('../repository/index')
const {compareTime} = require('../utils/helper')
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw  {error:`arrival time cannot be less than departure time`};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity})
            return flight;

        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
    // async getFlight(flightId){
    //
    // }
      async getAllFlightData(data){
            try{
                const flights = await this.flightRepository.getAll(data);
                return flights;

            }catch(Err){
                console.log(Err);
                throw {Err}
            }
      }
}

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
module.exports = FlightService;