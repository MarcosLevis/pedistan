import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { IRequestExtendida } from "../interfaces/req.interface";


export const checkJWT  = (req: IRequestExtendida, res: Response, next: NextFunction) => {
    try{
        const jwtUser = req.headers.authorization || ''
        const jwt = jwtUser.split(' ').pop()//['bearer','jwt1111']
        const user = verifyToken(`${jwt}`)
        if (!user){
            res.status(401)
            res.send('NO HAY UNA SESION VALIDA')
        }else{
            console.log(jwtUser)
            req.user = user    
            next()
        }
   }catch(e){
        res.status(400)
        res.send('SESSION_NO_VALIDA')
    }
}