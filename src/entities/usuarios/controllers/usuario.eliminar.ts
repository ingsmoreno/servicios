import { Request, Response } from "express";
import { UsuarioModel } from '../models/usuarios.models';


export const eliminarUnUsuario = async (req: Request, response: Response) => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: req.params.id } });
        if (usuario === null){
            return response.status(404).json({
                message: 'Usuario no encontrado',
                status: 'error',
            });
        }
        const idUser = usuario?.id_usuario;
        await UsuarioModel.destroy(
            {
                where: {
                    id_usuario: idUser,
                }
            });

        return response
            .status(204)
            .json({
                status: 'success',
            });

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la eliminacion del usuario');
    };
}; 