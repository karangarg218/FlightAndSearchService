const dotEnv=require('dotenv');
dotEnv.config();
const PORT=process.env.PORT;
module.exports={
    PORT
}

