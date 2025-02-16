import { config } from "dotenv";

/**
 * Configura y obtiene las variables de entorno de la aplicación
 * @example process.env.PORT
 */

config();

const PORT = process.env.PORT! 
const FRONTEND_URL = process.env.FRONTEND_URL!
const BACKEND_URL = process.env.BACKEND_URL!
const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT! 
const DB_NAME = process.env.DB_NAME! 
const DB_USER = process.env.DB_USER! 
const DB_PASSWORD = process.env.DB_PASSWORD! 
const DB_HOST = process.env.DB_HOST! 

export {
  PORT,
  FRONTEND_URL,
  BACKEND_URL,
  GRAPHQL_ENDPOINT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
};