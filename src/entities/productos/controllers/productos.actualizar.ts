import { NextFunction, Request, Response } from "express";
import { ProductoModel } from "../models/producto.models";


export const actualizarUnProducto = async (req: Request, response: Response, next: NextFunction) => {

    try {
        const data = await ProductoModel.findOne({ where: { id_producto: req.params.id } });
        if (data === null){
            return response.status(404).json({
                message: 'Producto no encontrado',
                status: 'error',
            });
        }

        const idProducto = data?.id_producto;
        await ProductoModel.update({ [Object.keys(req.body)[0]]: Object.values(req.body)[0] },
        {
            where: {
                id_producto: idProducto
            },
    });

        return response
            .status(200)
            .json({
                data,
                status: 'success',
            });

    } catch (error) {
        console.error('Error al buscar el producto:', error);
        return next(new Error('No se pudo realizar la consulta del producto'));
    }    
};