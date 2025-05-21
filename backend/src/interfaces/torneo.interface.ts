import { IPartida } from "./partida.interface";

export interface ITorneo {
    id: number;
    nombre: string;
    liga_id: number;
    tipo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
}