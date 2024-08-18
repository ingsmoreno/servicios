import { DataTypes, Model } from 'sequelize';
import Conexion from "../../../db/conexion";

const sequelize = new Conexion().sequelize;

export class DetallePedidoModel extends Model{
    public id!: number;
    public id_producto!: number;
    public id_pedido!: number;
    public id_perfil!: number;
};

DetallePedidoModel.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
    id_pedido: {
        allowNull: false,
        references: {
            key: 'id_pedido',
            model: 'pedido',
        },
        type: DataTypes.INTEGER,
    },
    id_perfil: {
        allowNull: false,
        references: {
            key: 'id_perfil',
            model: 'perfil',
        },
        type: DataTypes.INTEGER,
    },
    id_producto: {
        allowNull: false,
        references: {
            key: 'id_producto',
            model: 'producto',
        },
        type: DataTypes.INTEGER,
        },
    },{
        sequelize,
        tableName: 'detallePedidos',
        }
    );