import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { IRequestExtendida } from "../interfaces/req.interface";
import { CreatePartida, DeletePartida, GetPartidaById, GetPartidas, UpdatePartida } from "../services/partida.service" 

export const getPartidas = async (req:Request, res: Response) => {
    try{
        const { id } = req.params
        const response = await GetPartidas(id)
        const data = response ? response : "No existen Partidas en esta Liga"
        res.send(data)
    }catch(e){
        handleHttp(res, 'Error al listar las Partidas: ',e)
    }
}

export const getPartidaById = async (req:Request,res:Response) => {
  try{
    const { partida_id } = req.params;
    const response = await GetPartidaById(partida_id)
    const data = response ? response : "No existe ese partida"
    res.send(data)
  }catch(e){
    handleHttp(res, 'Error al listar una Partida: ',e)
  }
}

export const postPartida = async ({ body }: IRequestExtendida, res:Response) => {
  try{
    const response = await CreatePartida(body)
    res.send(response)
  }catch(e){
      handleHttp(res, 'Error al crear una Partida: ', e)
  }
}

export const updatePartida = async({ params, body }:IRequestExtendida,res:Response) => {
  try{
    const { partida_id } = params;
    const response = await UpdatePartida(partida_id, body)
    res.send({ data: response })
  }catch(e){
    handleHttp(res, 'Error al actualizar una Partida: ',e)
  }
}

export const deletePartida = async(req:Request,res:Response) => {
  try{
    const { partida_id } = req.params;
    const response = await DeletePartida(partida_id)
    res.send(response)
  }catch(e){
    handleHttp(res, 'Error al eliminar una Partida: ',e)
  }
}