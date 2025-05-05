import { sign, verify} from "jsonwebtoken"

const JWT = process.env.JWT || "tokencitofalso"

export const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT, {
        expiresIn: "2h"
    })
    return jwt
}

export const verifyToken = (jwt: string) => {
    const valido = verify(jwt, JWT)
    return valido
}