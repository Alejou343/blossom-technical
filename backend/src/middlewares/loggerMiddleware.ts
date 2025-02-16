import { Request, Response, NextFunction } from "express";

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.body && req.body.query) {
        console.log("GraphQL Query:", req.body.query);
    }
    next();
}
