import { DataTypes, Model } from 'sequelize'
import {Conexion} from "../db/conexion";

const sequelize = new Conexion().sequelize;

export class UsuarioModel extends Model {
   public id_usuario!: number;
   public nombre!: string;
   public apellido!: string;
   public telefono!: string;
   public pais!: string;
   public email!: string;
   public contrasena!: string;
   public rol!: string;
}

UsuarioModel.init({
    id_usuario: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pais:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contrasena:  {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol:  {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
        sequelize,
        tableName: 'usuarios'
});