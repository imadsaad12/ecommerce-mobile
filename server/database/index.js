const Pool=require("pg").Pool;

const poolD={
    user:"postgres",
    password:"test123",
    database:"testdb",
    host:"localhost",
    port:"5432"
}


const pool=new Pool(poolD)

module.exports=pool;