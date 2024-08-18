import { buscarPedido, crearPedido } from "../controllers/pedidos.controller";
import express from "express";

export const router = express.Router();

router
    .route('/')
    .get(buscarPedido)
    .post(crearPedido);