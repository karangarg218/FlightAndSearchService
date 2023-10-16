const {Airplane} = require('../models/index');
class AirplaneRepository{
    async getAirplane(id){
        try{
        const airplane = await Airplane.findByPk(id);
        return airplane;
        }catch(Err){
            console.log(`Error in repository layer`)
            throw{
                Err
            }
        }
    }


}
module.exports=AirplaneRepository
