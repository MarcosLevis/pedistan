import { ITorneo } from "./torneo.interface";
import { IUser } from "./user.interface";

export interface ILiga {
    id: number;
    nombre: string;
    descripcion: string;
    juego: string;
}