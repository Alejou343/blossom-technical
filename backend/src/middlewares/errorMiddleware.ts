import { Request, Response, NextFunction } from 'express'

interface ErrorResponse {
    status: number;
    location: string;
    message: string;
}

//Middleware para el manejador de errores en las peticiones de los endpoints
const errorMiddleware = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error"
    const location = err.location || "Error en un controlador"

    res.status(statusCode).json({
        status: statusCode,
        location: location,
        message: message
    })
}

export default errorMiddleware
