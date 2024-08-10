import { UsuarioModel } from '../models/usuarios.models';

type Callback_buscar_un_usuario = (id_usuario: number) => Promise<UsuarioModel | null>;

export const buscar_usuarios = async () => {
    return await UsuarioModel.findAll();
};

export const buscar_un_usuario = async (id_usuario: number): Promise<UsuarioModel | null> => {
    try {
        const usuario = await UsuarioModel.findOne({ where: { id_usuario: id_usuario } });
        if (usuario === null){
            throw new Error ('Usuario no encontrado');
        }

        return usuario;

    } catch (error) {
        console.error('Error al buscar el usuario:', error);
        throw new Error('No se pudo realizar la consulta del usuario');
    }     
};

export const actualizar_datos_usuario = async (id_usuarios: number, field: string, oldValue: string | number , callback: Callback_buscar_un_usuario ) => {
    try {
        const User = await callback(id_usuarios); 
        const idUser = User?.id_usuario;
        const user_updated = await UsuarioModel.update(
                { [field]: oldValue },
                {
                    where: {
                        id_usuario: idUser
                    },
            });
            if (user_updated[0] === 0){
            throw new Error (`campo: ${field} no encontrado`);
            }

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la actualizacion al usuario');
    }
};


export const eliminar_un_usuario = async (idUser: number, callback: Callback_buscar_un_usuario) => {
    try {
        const User = await callback(idUser); 
        const id = User?.id_usuario;
        UsuarioModel.destroy(
            {
                where: {
                    id_usuario: id
                }
            });

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo realizar la eliminacion del usuario');
    };
}; 