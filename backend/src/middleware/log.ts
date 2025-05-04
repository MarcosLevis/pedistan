import { NextFunction, Request, Response } from "express";

//NextFUnction es un argumento que permite seguir a ejecutar la siguiente funcion o no

export const logMiddleware = (req: Request, res:Response, next: NextFunction) => { 
    console.log('gola soy log')
    const header = req.headers;
    const userAgent = header["user-agent"]
    console.log("user-agent:", userAgent)
    next()
}