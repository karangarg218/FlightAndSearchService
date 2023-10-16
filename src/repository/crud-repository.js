class CrudRepository{
    constructor(model) {
        this.model=model
    }
    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        }catch(Err){
            console.log(`Crud repo layer ${Err}`)
            throw {Err}
        }
    }
    async destroy(id){
        try{
            const result = await this.model.destroy({
                where:{
                    id:id
                }
            });
            return result;
        }catch(Err){
            console.log(`Crud repo layer ${Err}`)
            throw {Err}
        }
    }
    async get(id) {
        try{
            const result = await this.model.findByPk(id);
            return result;
        }catch(Err){
            console.log(`Crud repo layer ${Err}`)
            throw {Err}
        }

    }
    async getAll(){
        try{
            const result = await this.model.findAll();
            return result;
        }catch(Err){
            console.log(`Crud repo layer ${Err}`)
            throw {Err}
        }

    }
    async update(modelId,data){
        try{
            const result = await this.model.update(data,{
                where:{
                    id:modelId
                }
            });
            return result;
        }catch(Err){
            console.log(`in the crud repo layer`)
            throw {Err}

        }
    }
}
module.exports=CrudRepository;