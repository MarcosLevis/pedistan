import { Request, Response } from "express"
import { Register,Login } from "../services/auth.service"
import { handleHttp } from "../utils/error.handle"

export const register = async ({body}:Request, res:Response) => {
    try{
        const response = await Register(body)
        res.send(response)
    }catch(e){
        handleHttp(res, 'ERROR_POST_REGISTER', e)
    }
}

export const login = async ({body}:Request, res:Response) => {
    try{
        const {email, password } = body
        const response = await Login({email, password })
        if (response == 'DATOS_INVALIDOS_b'){
            res.status(403)
        }
        res.send(response)
    }catch(e){
        handleHttp(res, 'ERROR_POST_LOGIN', e)
    }    
}