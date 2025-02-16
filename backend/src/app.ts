import express from 'express'
import bodyParser from 'body-parser';
import errorMiddleware from './middlewares/errorMiddleware';
import { startSwagger } from './config/swagger';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './graphql/resolvers';
import { dbSchema, schema } from './graphql/schema';

//Inicializando aplicación
const app = express()

//Inicializando aceptación de json en las peticiones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     if (req.body && req.body.query) {
//         console.log("GraphQL Query:", req.body.query);
//     }
//     next();
// });

//Inicializando rutas
app.use('/graphql', graphqlHTTP({ schema: schema, rootValue: resolvers, graphiql: true }))
app.use('/db/graphql', graphqlHTTP({ schema: dbSchema, rootValue: resolvers, graphiql: true }))

app.get('/Health', async (req, res) => {
    res.status(200).json('OK');
});

//Inicializando el manejador de errores
app.use(errorMiddleware)


//Inicializando Swagger
startSwagger(app)

export default app;
