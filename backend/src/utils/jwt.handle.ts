import {sign, verify} from "jsonwebtoken"
import { JwtPayloadExtendida } from "../interfaces/jwt.interface"

const JWT = process.env.JWT || "tokencitofalso"

export const generateToken = (id: number) => {
    const jwt = sign({ id }, JWT, {
        expiresIn: "2h"
    })
    return jwt
}

export const verifyToken = (jwt: string) => {
    try {
        const decoded = verify(jwt, JWT) as JwtPayloadExtendida;
        return decoded;        
    } catch (error) {
        console.error('Error al verificar el token:', error);
    }
}