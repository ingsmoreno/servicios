import { DataTypes, Model } from 'sequelize';
import Conexion from "../db/conexion";

const sequelize = new Conexion().sequelize;

export class PerfilModel extends Model{
    public id_perfil!: number;
    public estado!: string;
    public numero_perfil!: string;
};

PerfilModel.init({
    estado: {
        allowNull: false,
        defaultValue: 'Inactivo',
        type: DataTypes.STRING,
    },
    id_perfil: {
        allowNull: false,
        primaryKey: true,
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
    numero_perfil:  {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    },{
        sequelize,
        tableName: 'perfiles'
    }
);