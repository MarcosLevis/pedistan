import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    id: number;
    nombre: string;
    foto: string;
    descripcion: string;
}