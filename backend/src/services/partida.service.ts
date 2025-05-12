import { sequelize } from "../database/postgres";
import { IPartida } from "../interfaces/partida.interface";
import TorneoModel from "../models/torneo.model";
import PartidaModel from "../models/partida.model";

export const GetPartidas = async (torneo_id: string) => {
    const response = await PartidaModel.findAll({where: {torneo_id:torneo_id}})
    return response;
}

export const GetPartidaById = async(id: string) => {
    const response = await PartidaModel.findByPk(id)
    return response;
}

export const CreatePartida = async (partida: IPartida) => {
    const torneo = await TorneoModel.findByPk(partida.torneo_id)
    if (!torneo){
        return `No existe el Torneo con id: ${partida.torneo_id}` 
    }
    const response = await sequelize.transaction(async (t) => {
        const partidaCreada = await PartidaModel.create(partida, { transaction: t })
        return partidaCreada    
    })
    return response
}

export const UpdatePartida = async (id: string, data: IPartida) => { 
    const partida = await PartidaModel.findByPk(id);
    if (!partida) {
        return `No existe la Partida con id: ${id}`
    }
    const response = await sequelize.transaction(async (t) => {
        const partidaActualizado = await partida.update(data,{ transaction: t });
        return partidaActualizado;
    })
    return response
}

export const DeletePartida = async (id: string) => {   
    const partida = await PartidaModel.findByPk(id);
    if (!partida) {
        return `No existe la Partida con id: ${id}`
    }
    const response = await sequelize.transaction(async (t) => {
        const partidaEliminada = await partida.destroy({ transaction: t });
        return partidaEliminada
    })
    return response;
}

