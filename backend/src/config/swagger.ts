import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import { Express } from "express";

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Documentacion Blossom 1.0',
        version: '1.0.0',
        description: 'Documentacion API Blossom 1.0',
      },
      servers: [
        {
          url: 'http://localhost:80',
          description: 'Servidor local',
        },
      ],
    },
    apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const startSwagger = (app: Express) => {
    try{
        app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
        console.log('✅ Swagger Run')
    }catch(err){
        console.error(`Swagger Failed ❌ ${err}`)
    }
}