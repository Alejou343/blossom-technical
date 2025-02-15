import express from 'express'
import bodyParser from 'body-parser';
import demosRouter from './routes';

//Inicializando aplicación
const app = express()

//Inicializando aceptación de json en las peticiones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


//Inicializando rutas
app.use('/api', demosRouter)

app.get('/Health', async (req, res) => {
    res.status(200).json('OK');
});

//Inicializando el manejador de errores
// app.use(errorMiddleware)


//Inicializando Swagger
// startSwagger(app)

export default app;
