import { NextFunction, Request, Response } from "express";
import { UsuarioModel } from '../../models/usuarios.models';

export const validateExistenceUserId = async  (req: Request, response: Response, next: NextFunction) => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: req.params.id } });
        if (usuario === null){
            return response.status(404).json({
                message: 'Usuario no encontrado',
                status: 'error',
            });
        }
        next();
    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return next(new Error('No se pudo realizar la consulta del usuario'));
    }  
};
