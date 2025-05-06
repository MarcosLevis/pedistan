import { NextFunction, Response } from "express";
import { IRequestExtendida } from "../interfaces/req.interface";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from 'jsonwebtoken';



export const checkJWT  = (req: IRequestExtendida, res: Response, next: NextFunction) => {
    try{
        const jwtUser = req.headers.authorization || ''
        console.log('REQ.HEADERS.AUTHO: ', req.headers.authorization)
        const jwt = jwtUser.split(' ').pop() //['bearer','jwt1111']
        const user = verifyToken(`${jwt}`) 
        console.log('USUARIO JWT 0 SESSION.TS: ', user)
        req.user = user ///QUIERO QUE ACA PODER ACCEDER A USER.ID  Y QUE TENGA EL ID QUE ME DEVUELVE EL VERIFYTOKEN
        console.log("REQ: ", req.user?.id)
        next()
   }catch(e){
        res.status(401)
        res.send('SESSION_NO_VALIDA')
    }
}