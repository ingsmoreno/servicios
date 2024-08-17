import { NextFunction, Request, Response } from "express";
import { PerfilModel } from '../models/perfiles.models';

export const borrarPerfil = async (req: Request, response: Response, next: NextFunction) => {

    try {
        
        const perfil = await PerfilModel.findOne({ where: { id_perfil: req.params.id } });
        if (perfil === null){
            return response.status(404).json({
                message: 'Perfil no encontrado',
                status: 'error',
            });
        }
        const idPerfil = perfil?.id_perfil;
        await PerfilModel.destroy({ where: { id_perfil: idPerfil } });

        return response
            .status(204)
            .json({
                status: 'success',
            });
    } catch (error){
        console.error('Error al buscar los perfiles:', error);
        return next(new Error('No se pudo realizar la consulta de los perfiles'));
    }
};