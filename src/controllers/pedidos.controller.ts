import { Conexion } from "../db/conexion";
import { PedidoModel } from "../models/pedidos.models";
const sequelize = new Conexion();

export const buscarPedido = async () => {
    const pedido = await PedidoModel.findAll();
    console.log(pedido);
    return null;
};

sequelize.Ejecutar_SP('crear_pedido("2024-05-11", "2024-06-11", 63711977, 1003, 100)');