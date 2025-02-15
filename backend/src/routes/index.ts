import { Router } from "express";
import DemosController from "../controllers/demosController";

const demosRouter = Router();

demosRouter.post('/image', DemosController.sendTextMessage);

export default demosRouter;