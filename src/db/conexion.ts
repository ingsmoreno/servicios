
import { Sequelize } from 'sequelize'
import CONFIG from '../config';


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
            host: 'localhost',
            dialect: 'mysql',
            define: {
                timestamps: false,
              },
        });

        this.authenticate();
    }

    private async authenticate() {
        try{
            this.sequelize.authenticate();
        }catch(error){
            console.error('Unable to connect to the database: ', error);
            throw new Error ('database not connected');
        }
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
    })
   }
}

export default Conexion;
