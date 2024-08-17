import { buscarProductos, buscarUnProducto } from "../controllers/productos.buscar";
import { actualizarUnProducto } from "../controllers/productos.actualizar";
import { crearProductos } from "../controllers/productos.crear";
import express from "express";

export const router = express.Router();

router
    .route('/')
    .get(buscarProductos)
    .post(crearProductos);

router
    .route('/:id')
    .get( buscarUnProducto)
    .patch(actualizarUnProducto);