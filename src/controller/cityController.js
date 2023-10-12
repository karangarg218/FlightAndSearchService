const {CityService} = require('../services/index.js')

const cityService = new CityService()

const create = async (req,res)=>{
 try{
      console.log(`inside city controller`)
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data:city,
        success:true,
        message:'succesfully created a city',
        err:{}
    })
  }catch(err){
    return res.status(500).json({
      data:{},
      success:false,
      message:'not able to create city',
      err:err
    })
 }
}
const destroy = async (req,res)=>{
  try{
     const city = await cityService.deleteCity(req.params.id);
     return res.status(201).json({
         data:city,
         success:true,
         message:'succesfully deleted a city',
         err:{}
     })
   }catch(err){
     return res.status(500).json({
       data:{},
       success:false,
       message:'not able to delete city',
       err:err
     })
  }
 }
 const get = async (req,res)=>{
  try{
     const response = await cityService.getCity(req.params.id);
     return res.status(201).json({
         data:response,
         success:true,
         message:'succesfully get a city',
         err:{}
     })
   }catch(err){
     return res.status(500).json({
       data:{},
       success:false,
       message:'not able to get city',
       err:err
     })
  }
 }

 const update= async (req,res)=>{
  try{
     const response = await cityService.updateCity(req.params.id,req.body);
     return res.status(201).json({
         data:response,
         success:true,
         message:'succesfully updated a city',
         err:{}
     })
   }catch(err){
     return res.status(500).json({
       data:{},
       success:false,
       message:'not able to update a city',
       err:err
     })
  }
 }

 module.exports={
  create,
  update,
  get,
  destroy
 }