const{AirportService}  = require('../services/index')
const airportService = new AirportService();

const create = async (req,res)=>{
    try{
        console.log(req.body)
        const response = await airportService.create(req.body)
        return res.status(201).json({
             message:'succefully create aiport',
            err:{},
            data:response,
            success:true
        })
    }catch(Err){
        return res.status(500).json({
            message:'failded to  create aiport',
            err:{},
            data:{},
            success:false
        })
    }
}
module.exports ={
    create
}