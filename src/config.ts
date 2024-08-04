import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

interface IConfiguration {
    DB_USERNAME: string,
    DB_PASSWORD?: string,
    DB_PORT?: string,
}

const CONFIG: IConfiguration = {
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
}

export default CONFIG;