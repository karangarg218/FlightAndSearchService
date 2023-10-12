const {City} = require('../models/index');//return all the models
const {Op} = require('sequelize')
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
             const city= await City.findByPk(cityId);
             return city;
        }catch(Error){
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    }  
    async updateCity(cityId,data){
        try{
            //this approach will not return the updated object
            /*
             const city=await City.update(data,{
                where :{
                    id:cityId
                }
             });*/
             const city=await City.findByPk(cityId)
             city.name=data.name;
             await city.save();
             return city;
        }catch(Error){         
            console.log(`Something went wrong in the repository layer`)
            throw {Error};
        }
    }  
  async getAll(filter){ //filter can be empty
    console.log(filter)
    try{
        if(filter.name){
            console.log(`inside filter`)
            const cities= await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }
                }
            })
            return cities;
        }

        const city = await City.findAll();
        return city;
    }catch(Err){
        throw {Err}
    }
  }
} 
module.exports=CityRepository
  