import { ProductoModel } from "../models/producto.models";

export const buscarProductos = async () => {
    const perfiles = await ProductoModel.findAll();
    console.log(perfiles);
    return null;
};

export const crearProductos = async () => {
    const perfiles = await ProductoModel.create({ disponibles: 5, id_producto: 300 ,  nombre:  'Prime' });
    console.log(perfiles);
    return null;
};

export const borrarProducto = async () => {
    const perfiles = await ProductoModel.destroy({ where: { id_producto: 300 } });
    console.log(perfiles);
    return null;
};