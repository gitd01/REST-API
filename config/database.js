//const mysql=require("mysql");
const myqsl=require("mysql");
const {createPool}=require("mysql");

const pool= createPool({
    port: process.env.DB_PORT,//by default 3306
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
    // connectionLimit : 1000,
    // connectTimeout  : 60 * 60 * 1000,
    // acquireTimeout  : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000,
    // this._timeout  = 100000
});

module.exports=pool;
