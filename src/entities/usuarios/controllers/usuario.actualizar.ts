import { NextFunction, Request, Response } from "express";
import { UsuarioModel } from '../models/usuarios.models';

export const actualizarDatosUsuario = async (req: Request, response: Response, next: NextFunction ) => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: req.params.id } });
        const idUser = usuario?.id_usuario;

        const user_updated = await UsuarioModel.update(
                { [Object.keys(req.body)[0]]: Object.values(req.body)[0] },
                {
                    where: {
                        id_usuario: idUser
                    },
            });
            if (user_updated[0] === 0){
                return next(new Error (`campo: ${Object.keys(req.body)[0]} no encontrado`));
            };
            
        return response
            .status(200)
            .json({
                status: 'success',
            });

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la actualizacion al usuario');
    }
};