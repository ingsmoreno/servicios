
import CONFIG from '../config';
import { Sequelize } from 'sequelize';

interface IParameters {
    id_usuario: number
    nombre: string,
    apellido: string,
    telefono: string,
    pais: string,
    email: string,
    contrasena: string,
    rol: string,
}

export class Conexion {
    public sequelize: Sequelize;
    constructor(){
         this.sequelize = new Sequelize('db_services', CONFIG.DB_USERNAME, CONFIG.DB_PASSWORD, 
        {
            define: {
                timestamps: false,
              },
            dialect: 'mysql',
            host: 'localhost',
            port: parseInt(CONFIG.DB_PORT || "3306", 10),
        });

            this.sequelize.authenticate().then(()=> {
                console.log('Connection has been established successfully.');
            }).catch (err => {
                console.error('Unable to connect to the database:', err);

            });
        }

   async Ejecutar_SP(procedimiento: string, parametros: IParameters[]){
    parametros.forEach(async elemetos => {
        await this.sequelize.query(`CALL ${procedimiento}(${elemetos.id_usuario},
             "${elemetos.nombre}",
             "${elemetos.apellido}",
             "${elemetos.telefono}",
             "${elemetos.pais}",
             "${elemetos.email}",
             "${elemetos.contrasena}",
             "${elemetos.rol}")`);
    });
   }
}

export default Conexion;
