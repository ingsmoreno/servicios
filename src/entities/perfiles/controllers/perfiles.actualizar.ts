import { NextFunction, Request, Response } from "express";
import { PerfilModel } from '../models/perfiles.models';

export const actualizarPerfil = async (req: Request, response: Response, next: NextFunction) => {

    try {
        const data = await PerfilModel.findOne({ where: { id_perfil: req.params.id } });
        if (data === null){
            return response.status(404).json({
                message: 'Perfil no encontrado',
                status: 'error',
            });
        }
        const idPerfil = data.id_perfil;
        console.log(Object.keys(req.body)[0]);

        const perfilActualizado = await PerfilModel.update({ [Object.keys(req.body)[0]]: Object.values(req.body)[0] },
        {
            where: {
                id_perfil: idPerfil
            },
        });

        if (perfilActualizado[0] === 0){
            return next(new Error (`campo: ${Object.keys(req.body)[0]} no encontrado`));
        };
        return response
            .status(201)
            .json({
                status: 'success',
            });
    } catch (error){
        console.error('Error al eliminar el perfil:', error);
        return next(new Error('No se pudo realizar la eliminacion del perfil'));
    }
    
};