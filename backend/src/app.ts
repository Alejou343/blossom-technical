import express from 'express'
import bodyParser from 'body-parser';
import { startSwagger } from './config/swagger';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';
import dbSchema from './schema';
import cors from 'cors';
import { FRONTEND_URL, BACKEND_URL } from './config/config'
import { loggerMiddleware } from './middlewares/loggerMiddleware';
import queryTimer from './middlewares/timer';
import axios from 'axios';
import { generateQuery } from './utils/generateQuery';

/**
 * Initializes an Express application instance.
 * 
 * @constant {Express.Application} app - The Express application instance.
 */
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: FRONTEND_URL }));
app.use((req, res, next) => loggerMiddleware(req, res, next))
app.use(queryTimer);

app.use('/graphql', graphqlHTTP({ schema: schema, rootValue: resolvers, graphiql: true }))
app.use('/db/graphql', graphqlHTTP({ schema: dbSchema, graphiql: true }))

app.get('/Health', async (req, res) => {
    res.status(200).json('OK');
});

async function executeMigration() {
    try {
        const query = generateQuery()
        const response = await axios.post(`${BACKEND_URL}/graphql`, { query });
        console.log('Migración completada:', response.data);
    } catch (error) {
        console.error('Error ejecutando la migración:', error);
    }
}

setTimeout(() => {
    executeMigration();
    setInterval(executeMigration, 12 * 60 * 60 * 1000);
}, 5000);

startSwagger(app)

export default app;