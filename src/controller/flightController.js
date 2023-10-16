const {FlightService} = require('../services/index')
const flightService = new FlightService()
const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            err:{},
            message:'Successfully created the flight'
        })

    }catch (err) {
        return res.status(500).json({
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
                return res.status(201).json({
                    data:response,
                    message:`succefully fetched the cities;`
                })
            }catch(Err){
                return res.status(500).json({
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