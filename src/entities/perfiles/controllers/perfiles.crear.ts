import { NextFunction, Request, Response } from "express";
import { PerfilModel } from '../models/perfiles.models';


interface CustomError extends Error {
    code?: string; // Opcional, ya que no todos los errores tienen un código
    original?: {
        code?: string;
    };
}

export const crearPerfil = async (req: Request, response: Response, next: NextFunction) => {

    try {
        const perfil = await PerfilModel.create(req.body);
        return response
            .status(201)
            .json({
                data: perfil,
                status: 'success',
            });
    } catch (error){
        if (error instanceof Error) {
            const customError = error as CustomError;
            const errorCode = customError.original?.code;

            if (errorCode === "ER_DUP_ENTRY") {
                return response.status(409).json({
                    message: `Código de error: ${errorCode}, Mensaje: ${error.message}`,
                    status: 'error',
                });
            }
            return next(new Error('No se pudo crear el perfil'));
        } else {
            console.error('Error inesperado:', error);
            return next(new Error('No se pudo realizar la creacion del perfil'));
        }
    }
    
};