import { buscarUnUsuario, buscarUsuarios } from "../controllers/usuario.buscar";
import { actualizarDatosUsuario } from "../controllers/usuario.actualizar";
import { crearUsuario } from "../controllers/usuarios.crear";
import { eliminarUnUsuario } from "../controllers/usuario.eliminar";
import express from "express";


export const router = express.Router();

router
    .route('/')
    .get(buscarUsuarios)
    .post(crearUsuario);

router
    .route('/:id')
    .get(buscarUnUsuario)
    .patch(actualizarDatosUsuario)
    .delete(eliminarUnUsuario);
