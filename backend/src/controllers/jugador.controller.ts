import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { CreateJugador, GetJugadores, GetJugadorById, UpdateJugador, DeleteJugador } from "../services/jugador.service"
import { IRequestExtendida } from "../interfaces/req.interface"

export const getJugadores = async (req:Request, res:Response) => {
  try{
    const response = await GetJugadores()
    const data = response ? response : "No existen Jugadores"
    res.send(data)
  }catch(e){
      handleHttp(res, 'Error al listar las Jugadores: ',e)
  }
}

export const getJugadorById = async (req:Request,res:Response) => {
  try{
    const { id } = req.params;
    const response = await GetJugadorById(id)
    const data = response ? response : "No existe esa Jugador"
    res.send(data)
  }catch(e){
    handleHttp(res, 'Error al listar una Jugador: ',e)
  }
}

export const postJugador = async ({ body }: IRequestExtendida, res:Response) => {
  try{
    const response = await CreateJugador(body)
    res.send(response)
  }catch(e){
      handleHttp(res, 'Error al crear una Jugador: ', e)
  }
}

export const updateJugador = async({ params, body, user }:IRequestExtendida,res:Response) => {
  try{
    const { id } = params;
    const response = await UpdateJugador(id,body)
    res.send({
      data: response,
      user: user
    })
  }catch(e){
    handleHttp(res, 'Error al actualizar una Jugador: ',e)
  }
}

export const deleteJugador = async(req:Request,res:Response) => {
  try{
    const { id } = req.params;
    const response = await DeleteJugador(id)
    res.send(response)
  }catch(e){
    handleHttp(res, 'Error al eliminar una Jugador: ',e)
  }
}