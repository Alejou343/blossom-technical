import { Request, Response, NextFunction } from "express";

const queryTimer = (req: Request, res: Response, next: NextFunction) => {
    const start = process.hrtime(); 

    res.on("finish", () => { 
        const end = process.hrtime(start);
        const timeInMs = (end[0] * 1e3) + (end[1] / 1e6);
        console.log(`[${req.method}] ${req.originalUrl} - ${timeInMs.toFixed(2)} ms`);
    });

    next();
};

export default queryTimer;
