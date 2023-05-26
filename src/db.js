import "dotenv/config"
//import mysql from "mysql"



import { DataSource } from 'typeorm'


const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306

})
// const AppDataSource = new DataSource({
//     type: 'mysql',
//     host: "localhost",
//     username: "user",
//     password: "password",
//     database: "database_api_carros",
//     port: 3306

// })

export default AppDataSource