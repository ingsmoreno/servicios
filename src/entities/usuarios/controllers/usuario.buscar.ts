import { NextFunction, Request, Response } from "express";
import { UsuarioModel } from '../models/usuarios.models';

export const buscarUsuarios = async (req: Request, response: Response) => {
    const usuarios = await UsuarioModel.findAll();
    if (usuarios === null){
        return response.status(404).json({
            message: 'Usuario no encontrado',
            status: 'error',
        });
    }

    return response
        .status(200)
        .json({
            data: usuarios,
            status: 'success',
        });
};

export const buscarUnUsuario = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: req.params.id } });
        return response
            .status(200)
            .json({
                data: usuario,
                status: 'success',
            });

    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        return next(new Error('No se pudo realizar la consulta del usuario'));
    }     
};