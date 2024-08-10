import { DataTypes, Model } from 'sequelize';
import Conexion from "../db/conexion";
const sequelize = new Conexion().sequelize;
    
export class ProductoModel extends Model{
    public id_producto!: number;
    public nombre!: string;
    public disponibles!: string;
}

ProductoModel.init({
    disponibles:  {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    id_producto: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    }, {
        sequelize,
        tableName: 'productos'
    }
);