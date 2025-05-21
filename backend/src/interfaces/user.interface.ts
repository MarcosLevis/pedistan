import { IAuth } from "./auth.interface";
import { ILiga } from "./liga.interface";

export interface IUser extends IAuth {
    id: number;
    nombre: string;
    foto: string;
    descripcion: string;
}