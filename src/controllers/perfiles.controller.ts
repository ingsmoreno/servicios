import { PerfilModel } from '../models/perfiles.models';

export const buscarPerfiles = async () => {
    const perfiles = await PerfilModel.findAll();
    console.log(perfiles);
    return null;
};

export const crearPerfil = async () => {
    const perfiles = await PerfilModel.create({ id_perfil: 3001,id_producto: 300,  numero_perfil:  1 });
    console.log(perfiles);
    return null;
};

export const borrarPerfil = async () => {
    const perfiles = await PerfilModel.destroy({ where: { id_perfil: 3001 } });
    console.log(perfiles);
    return null;
};