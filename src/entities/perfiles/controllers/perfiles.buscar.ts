import { NextFunction, Request, Response } from "express";
import { PerfilModel } from '../models/perfiles.models';

export const buscarPerfiles = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const data = await PerfilModel.findAll();
        return response
            .status(200)
            .json({
                data: data,
                status: 'success',
            });
    } catch (error){
        console.error('Error al buscar los perfiles:', error);
        return next(new Error('No se pudo realizar la consulta de los perfiles'));
    }
};

export const buscarUnPerfil = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const data = await PerfilModel.findOne({ where: { id_perfil: req.params.id } });
        if (data === null){
            return response.status(404).json({
                message: 'Perfil no encontrado',
                status: 'error',
            });
        }

        return response
            .status(200)
            .json({
                data,
                status: 'success',
            });
    } catch (error){
        console.error('Error al buscar los perfiles:', error);
        return next(new Error('No se pudo realizar la consulta de los perfiles'));
    }
};