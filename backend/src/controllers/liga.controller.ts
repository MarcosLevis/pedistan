import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { CreateLiga, GetLigas, GetLigaById, UpdateLiga, DeleteLiga } from "../services/liga.service"
import { IRequestExtendida } from "../interfaces/req.interface"

export const getLigas = async (req:Request, res:Response) => {
  try{
    const response = await GetLigas()
    const data = response ? response : "No existen Ligas"
    res.send(data)
  }catch(e){
      handleHttp(res, 'Error al listar las Ligas: ',e)
  }
}

export const getLigaById = async (req:Request,res:Response) => {
  try{
    const { id } = req.params;
    const response = await GetLigaById(id)
    const data = response ? response : "No existe esa Liga"
    res.send(data)
  }catch(e){
    handleHttp(res, 'Error al listar una Liga: ',e)
  }
}

export const postLiga = async ({ body, user }: IRequestExtendida, res:Response) => {
  try{
    const response = await CreateLiga(body, user!)
    res.send(response)
  }catch(e){
      handleHttp(res, 'Error al crear una Liga: ', e)
  }
}

export const updateLiga = async({ params, body, user }:IRequestExtendida,res:Response) => {
  try{
    const { id } = params;
    const response = await UpdateLiga(id,body)
    res.send({
      data: response,
      user: user
    })
  }catch(e){
    handleHttp(res, 'Error al actualizar una Liga: ',e)
  }
}

export const deleteLiga = async(req:Request,res:Response) => {
  try{
    const { id } = req.params;
    const response = await DeleteLiga(id)
    res.send(response)
  }catch(e){
    handleHttp(res, 'Error al eliminar una Liga: ',e)
  }
}