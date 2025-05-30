import dotenv from 'dotenv';
dotenv.config();

const config = {
    getDataBaseConfig: () => ({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })
}

export default config


