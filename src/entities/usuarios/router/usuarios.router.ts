import { buscarUnUsuario, buscarUsuarios, crearUsuario } from "../controllers/usuario.buscar";
import { actualizarDatosUsuario } from "../controllers/usuario.actualizar";
import { eliminarUnUsuario } from "../controllers/usuario.eliminar";
import express from "express";
import { validateExistenceUserId } from "../controllers/middlewares/usuarios.middleware";


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
