const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const response = await this.CityRepository.createCity(data);
      return response;
    } catch (Err) {
      console.log(Err);
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (Err) {
      console.log(Err);
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.CityRepository.updateCity(cityId, data);
      return response;
    } catch (Err) {
      throw { Err };
    }
  }

  async getCity(cityId) {
    try {
      const response = await this.CityRepository.getCity(cityId);
      return response;
    } catch (Err) {
      throw { Err };
    }
  }
  async getAll(filter){
    try{
      const response = await this.CityRepository.getAll({name:filter.name});
      return response;
      }catch(Err){
      throw {Err}
    }
  }
}
module.exports = CityService;
