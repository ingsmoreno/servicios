import { NextFunction, Request, Response } from "express";
import { UsuarioModel } from '../models/usuarios.models';

interface CustomError extends Error {
    code?: string; // Opcional, ya que no todos los errores tienen un código
    original?: {
        code?: string;
    };
}

export const crearUsuario = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const usuario = await UsuarioModel.create(req.body);
        if (usuario)
        return response
            .status(201)
            .json({
                data: usuario,
                status: 'success',
            });

    } catch (error) {
        if (error instanceof Error) {
            const customError = error as CustomError;
            const errorCode = customError.original?.code;

            if (errorCode === "ER_DUP_ENTRY") {
                return response.status(409).json({
                    message: `Código de error: ${errorCode}, Mensaje: ${error.message}`,
                    status: 'error',
                });
            }
            return next(new Error('No se pudo crear el usuario'));
        } else {
            console.error('Error inesperado:', error);
            return next(new Error('No se pudo realizar la creacion del usuario'));
        }
    }     
};