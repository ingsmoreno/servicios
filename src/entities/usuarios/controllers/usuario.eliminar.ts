import { Request, Response } from "express";
import { UsuarioModel } from '../models/usuarios.models';


export const eliminarUnUsuario = async (req: Request, response: Response) => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: req.params.id } });
        const idUser = usuario?.id_usuario;
        UsuarioModel.destroy(
            {
                where: {
                    id_usuario: idUser,
                }
            });

        return response
            .status(200)
            .json({
                status: 'success',
            });

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la eliminacion del usuario');
    };
}; 