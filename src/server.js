import "dotenv/config.js"
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes.js'
import AppDataSource from './db.js';



AppDataSource.initialize().then((conn) => {

  // conn.
  //   database.connection("database_api_carros", () => {
  //     console.log(`Server conectado on database_api_carros`)
  //   })
})
const server = express();
server.use(express.json())
import * as dotenv from "dotenv"
dotenv.config()



server.use(routes)
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));


server.use('/api', routes);


server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

