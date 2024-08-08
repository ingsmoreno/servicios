import { DataTypes, Model } from 'sequelize';
const sequelize = new Conexion().sequelize;
import Conexion from "../db/conexion";
    
export class ProductoModel extends Model{
    public id!: number;
    public nombre!: string;
    public disponibles!: string;
}

ProductoModel.init({
    disponibles:  {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
    nombre: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    }, {
        sequelize,
        tableName: 'productos'
    }
);