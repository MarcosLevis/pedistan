export interface ITorneo {
    id: number
    liga_id: number
    tipo: string
    fechaInicio: Date
    fechaFin: Date
    ganador: string ///despues va a ser un jugador?
}