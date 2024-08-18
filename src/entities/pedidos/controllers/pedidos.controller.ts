import { NextFunction, Request, Response } from "express";
import { PedidoModel } from "../models/pedidos.models";
import { sequelize } from "../../../db/conexion";


export const buscarPedido = async (req: Request, response: Response, next: NextFunction) => {

    try {
        const data = await PedidoModel.findAll();
        return response
            .status(200)
            .json({
                data: data,
                status: 'success',
            });
    } catch (error){
        console.error('Error al buscar los pedidos:', error);
        return next(new Error('No se pudo realizar la consulta de los pedidos'));
    }
};

export const crearPedido = async (req: Request, response: Response, next: NextFunction) =>{
    try {
        await sequelize.query(`CALL crear_pedido("${req.body.fecha_de_compra}","${req.body.fecha_de_caducidad}",${req.body.id_usuario},${req.body.id_perfil},${req.body.id_producto})`);
        return response
            .status(200)
            .json({
                status: 'success',
            });
    } catch (error){
        console.error('Error al crear el pedido:', error);
        return next(new Error('No se pudo realizar la creacion del pedido'));
    }
};
