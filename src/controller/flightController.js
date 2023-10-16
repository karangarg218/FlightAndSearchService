const {FlightService} = require('../services/index')
const flightService = new FlightService()
const {SuccessCodes,ServerErrors} = require('../utils/Error-codes')
const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body. arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }


        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created the flight'
        })

    }catch (err) {
        return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
            err: err.error,
            message:err,
            data: {},
            success: false


        })
    }
}

const getAll = async (req,res)=>{
            try{
                const response = await flightService.getAllFlightData(req.query);
                return res.status(SuccessCodes.OK).json({
                    data:response,
                    message:`succefully fetched the cities;`
                })
            }catch(Err){
                return res.status(ServerErrors.INTERNAL_SERVER_ERROR).json({
                    err:Err,
                    message:`Error in geeting all the fligths`,
                    success:false

                })
            }
}
module.exports={
    create,
    getAll
}