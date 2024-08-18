import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../../db/conexion";

export class PedidoModel extends Model{
    public id!: number;
    public fecha_de_compra!: Date;
    public fecha_de_caducidad!: Date;
    public id_usuario!: number;
};

PedidoModel.init({
    fecha_de_caducidad:  {
        allowNull: false,
        type: DataTypes.DATE,
    },
    fecha_de_compra: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    id_usuario: {
        allowNull: false,
        references: {
            key: 'id_usuarios',
            model: 'usuarios',
        },
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    tableName: 'pedidos'
    }
);