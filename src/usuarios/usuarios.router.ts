import { buscarUnUsuario, buscarUsuarios, crearUsuario } from "./controller/usuario.buscar";
import { actualizarDatosUsuario } from "./controller/usuario.actualizar";
import { eliminarUnUsuario } from "./controller/usuario.eliminar";
import express from "express";
import { validateExistenceUserId } from "./controller/usuarios.controller";


export const router = express.Router();

router
    .route('/')
    .get(buscarUsuarios);

router
    .route('/:id')
    .post(crearUsuario)
    .get(validateExistenceUserId, buscarUnUsuario)
    .patch(validateExistenceUserId, actualizarDatosUsuario)
    .delete(validateExistenceUserId, eliminarUnUsuario);
