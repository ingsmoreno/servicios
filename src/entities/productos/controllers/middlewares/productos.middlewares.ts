import { NextFunction, Request, Response } from "express";
import { ProductoModel } from "../../models/producto.models";

export const validateExistenceProductId = async  (req: Request, response: Response, next: NextFunction) => {
    try {
        const data = await ProductoModel.findOne({ where: { id_producto: req.params.id } });
        if (data === null){
            return response.status(404).json({
                message: 'Producto no encontrado',
                status: 'error',
            });
        }
        next();
    } catch (error) {
        console.error('Error al buscar el producto:', error);
        return next(new Error('No se pudo realizar la consulta del producto'));
    }  
};