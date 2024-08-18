
import CONFIG from '../config';
import { Sequelize } from 'sequelize';

class Conexion {
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
        
        // Not in use.
   async Ejecutar_SP(procedimiento: string){
    await this.sequelize.query(`CALL ${procedimiento}`);
   }
}

export const sequelize = new Conexion().sequelize;