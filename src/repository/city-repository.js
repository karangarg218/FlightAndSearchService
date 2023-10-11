const {City} = require('../models/index');//return all the models
class CityRepository{
    async createCity({cityName}){
        try{
            const city = await City.create({
               name: cityName
            })
            return city;
        }catch(Error){
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    
    }
    async deleteCity(cityId){
        try{
            let result = await City.destroy(
                {
                    where:{
                        id:cityId
                    }
                }
            )
            return result; 
        }catch(Error){
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    }
    async getCity(cityId){
        try{
             const city=City.findByPk(cityId);
             return city;
        }catch(Error){
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    }  
    async updateCity(cityId,data){
        try{
             const city=City.update(data,{
                where :{
                    id:cityId
                }
             });
             return city;
        }catch(Error){
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    }  
    
} 
module.exports=CityRepository
  