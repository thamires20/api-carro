import express from "express";
import { Router } from "express";
import * as CarroController from './controllers/CarroController.js';
const server = express();
const router = Router()

server.use(express)





router.get('/carros', CarroController.buscarTodos)
router.get('/carro/:codigo', CarroController.buscarUm)
router.post('/carro', CarroController.inserir)
router.put('/carro/:codigo', CarroController.alterar)
router.delete('/carro/:codigo', CarroController.excluir)
router.get('/carromo/:modelo', CarroController.buscarModelo)



export default router