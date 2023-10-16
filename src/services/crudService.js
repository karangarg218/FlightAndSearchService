class CrudService{
        constructor(repository) {
            this.repository = repository
        }
        async create(data){
            console.log(data)
            try{
                const response = await this.repository.create(data);
                return response;
            }catch(Err){
                console.log(Err);
                throw {Err}
            }
        }
        async destory(id){
            try{
                const response = await this.repository.destroy(id);
                return response;
            }catch(Err){
                console.log(Err);
                throw {Err}
            }
        }
    async get(id){
        try{
            const response = await this.repository.destroy(id);
            return response;
        }catch(Err){
            console.log(Err);
            throw {Err}
        }
    }
    async getAll(){
        try{
            const response = await this.repository.destroy();
            return response;
        }catch(Err){
            console.log(Err);
            throw {Err}
        }
    }

    async update(id,data){
        try{
            const response = await this.repository.update(id,data);
            return response;
        }catch(Err){
            console.log(Err);
            throw {Err}
        }
    }
}
module.exports =CrudService