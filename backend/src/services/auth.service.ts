import UserModel from "../models/user.model"
import { IUser } from '../interfaces/user.interface';
import { IAuth } from "../interfaces/auth.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const Register = async ({nombre, email, password, foto, descripcion}: IUser) => {
    
    const auth = await FindUserByEmail(email)
    if (auth) return "MAIL_YA_UTILIZADO"
    
    try{
        const passHash = await encrypt(password)
        const user = await UserModel.create({nombre, email, password: passHash, foto, descripcion})
        return user
    }catch(error){
        console.error("Error al registrar un usuario:", error)
        throw error;
    }
}

export const Login = async ({email, password}: IAuth) => {
    const user = await FindUserByEmail(email)
    if (!user) return "DATOS_INVALIDOS_A"

    const passHash = user.password
    const valida = await verified(password,passHash)

    if (!valida) return 'DATOS_INVALIDOS_B'

    const token = generateToken(user.id)
    const data = {token, user: user}
    return data
    
}

const FindUserByEmail = async (email: string) => {
    const user = await UserModel.findOne({where: {email:email}})
    return user
}      