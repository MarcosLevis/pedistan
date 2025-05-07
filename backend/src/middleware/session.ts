import { NextFunction, Response } from "express";
import { IRequestExtendida } from "../interfaces/req.interface";
import { verifyToken } from "../utils/jwt.handle";

export const checkJWT  = (req: IRequestExtendida, res: Response, next: NextFunction) => {
    try{
        const jwtUser = req.headers.authorization || ''
        const jwt = jwtUser.split(' ').pop() //['bearer','jwt1111']
        const user = verifyToken(`${jwt}`) 
        req.user = user
        next()
   }catch(e){
        res.status(401)
        res.send('Sesion no valida')
    }
}