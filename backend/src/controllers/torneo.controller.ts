import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { IRequestExtendida } from "../interfaces/req.interface";
import { CreateTorneo, DeleteTorneo, GetTorneoById, GetTorneos, UpdateTorneo } from "../services/torneo.service";

export const getTorneos = async (req:Request, res: Response) => {
    try{
        const { id } = req.params
        const response = await GetTorneos(id)
        const data = response ? response : "No existen Torneos en esta Liga"
        res.send(data)
    }catch(e){
        handleHttp(res, 'Error al listar las Torneos: ',e)
    }
}

export const getTorneoById = async (req:Request,res:Response) => {
  try{
    const { torneo_id } = req.params;
    const response = await GetTorneoById(torneo_id)
    const data = response ? response : "No existe ese Torneo"
    res.send(data)
  }catch(e){
    handleHttp(res, 'Error al listar un Torneo: ',e)
  }
}

export const postTorneo = async ({ body }: IRequestExtendida, res:Response) => {
  try{
    const response = await CreateTorneo(body)
    res.send(response)
  }catch(e){
      handleHttp(res, 'Error al crear un Torneo: ', e)
  }
}

export const updateTorneo = async({ params, body }:IRequestExtendida,res:Response) => {
  try{
    const { torneo_id } = params;
    const response = await UpdateTorneo(torneo_id, body)
    res.send({ data: response })
  }catch(e){
    handleHttp(res, 'Error al actualizar un Torneo: ',e)
  }
}

export const deleteTorneo = async(req:Request,res:Response) => {
  try{
    const { torneo_id } = req.params;
    const response = await DeleteTorneo(torneo_id)
    res.send(response)
  }catch(e){
    handleHttp(res, 'Error al eliminar un Torneo: ',e)
  }
}