import { buscarPerfiles, buscarUnPerfil } from "../controllers/perfiles.buscar";
import { actualizarPerfil } from "../controllers/perfiles.actualizar";
import { borrarPerfil } from "../controllers/perfiles.eliminar";
import { crearPerfil } from "../controllers/perfiles.crear";
import express from "express";

export const router = express.Router();

router
    .route('/')
    .get(buscarPerfiles)
    .post(crearPerfil);

router
    .route('/:id')
    .get(buscarUnPerfil)
    .patch(actualizarPerfil)
    .delete(borrarPerfil);