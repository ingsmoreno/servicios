import { DataTypes, Model } from 'sequelize';
import { sequelize } from "../../../db/conexion";

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
    apellido:  {
        allowNull: false,
        type: DataTypes.STRING,
    },
    contrasena:  {
        allowNull: false,
        type: DataTypes.STRING,
    },
    email:  {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    id_usuario: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    pais:  {
        allowNull: false,
        type: DataTypes.STRING,
    },
    rol:  {
        allowNull: false,
        type: DataTypes.STRING,
    },
    telefono:  {
        allowNull: false,
        type: DataTypes.STRING,
    },
}, {
        sequelize,
        tableName: 'usuarios'
});