import { NextFunction, Request, Response } from "express";
import { ProductoModel } from "../models/producto.models";

export const crearProductos = async (req: Request, response: Response, next: NextFunction) => {
    try {
        const data = await ProductoModel.create(req.body);
        return response
            .status(201)
            .json({
                data: data,
                status: 'success',
            });

    } catch (error){
        console.error('Error al buscar el producto:', error);
        return next(new Error('No se pudo realizar la creacion del producto'));
    }
};