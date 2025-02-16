import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from '../config/config';

dotenv.config();

/**
 * @async
 * @function createDatabase
 * @description Verifica si la base de datos existe, si no, la crea.
 */
async function createDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: DB_HOST || 'localhost',
            user: DB_USER || 'root',
            password: DB_PASSWORD || ''
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
        console.log(`✅ Base de datos "${DB_NAME}" creada o ya existente.`);
        await connection.end();
    } catch (error) {
        console.error('❌ Error al crear la base de datos:', error);
    }
}

/**
 * Configuración de Sequelize
 */
export const sequelize = new Sequelize(
    DB_NAME || '',
    DB_USER || '',
    DB_PASSWORD || '',
    {
        host: DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

/**
 * @async
 * @function checkConnection
 * @description Verifica la conexión a la base de datos con Sequelize.
 */
async function checkConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a la base de datos establecida con éxito.');
    } catch (error) {
        console.error('❌ No se pudo conectar a la base de datos:', error);
    }
}

(async () => {
    await createDatabase();
    await checkConnection();
})();
