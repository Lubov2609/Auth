import  pg from 'pg';
import {reject} from "bcrypt/promises.js";
const{Pool}=pg;


let localPoolConfig = {
    user:'luba',
    password:'admin',
    host:'localhost',
    port:'5432',
    database:'jwttutorial',
};

const poolConfig = process.env.DATABASE_URL?{
    connectionString:process.env.DATABASE_URL,
    sel:{rejectUnauthorized:false}
}: localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;