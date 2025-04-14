import { ILiga } from "../interfaces/liga.interface"
import LigaModel from "../models/liga.model"

export const listLigas = async () => {
    const responseInsert = await LigaModel.findAll()
    return responseInsert;
}
export const createLiga = async (liga: ILiga) => {
    const responseInsert = await LigaModel.create(liga)
    return responseInsert;
}

