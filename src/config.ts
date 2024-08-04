import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const CONFIG = {
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD
}

export default CONFIG;