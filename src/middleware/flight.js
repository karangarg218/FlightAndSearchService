const {ClientErrors} = require('../utils/Error-codes')
const validateFlight =(req,res,next)=>{
 if(
    !req.body.flightNumber||
    !req.body.airplaneId||
    !req.body.departureAirportId||
     !req.body.arrivalAirportId||
     !req.body.arrivalTime||
     !req.body.departureTime||
     !req.body.price
 ){
    return res.status(ClientErrors.BAD_REQUEST).json({
        data:{

        },
        success:false,
        message:`Invalid request body`,
        err:`missing mandatory property to create flight`

    })
 }
next();
}

module.exports={
  validateFlight
}