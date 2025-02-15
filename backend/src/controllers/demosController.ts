import axios from "axios";
import * as dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'

dotenv.config()

/**
 * @class DemosController
 * @description
 * Controlador para manejar el envío de mensajes a través de la API de WhatsApp de Facebook.
 */

class DemosController {
    constructor() {}

    async sendTextMessage(req: Request, res: Response, next: NextFunction): Promise<any> {
        const { from, text } = req.body;  // ✅ Extrae correctamente el texto del mensaje
        try {
            return res.status(200).json({ message: "El mensaje fue enviado correctamente" });
        } catch (err) {
            return res.status(500).json({ message: "Hubo un problema al enviar el mensaje" });
        }
    }
}

export default new DemosController();