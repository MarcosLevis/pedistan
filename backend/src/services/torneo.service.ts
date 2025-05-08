import { sequelize } from "../database/postgres";
import { ITorneo } from "../interfaces/torneo.interface";
import LigaModel from "../models/liga.model";
import TorneoModel from "../models/torneo.model";

export const GetTorneos= async (liga_id: string) => {
    const response = await TorneoModel.findAll({where: {liga_id:liga_id}})
    return response;
}

export const GetTorneoById = async(id: string) => {
    const response = await TorneoModel.findByPk(id)
    return response;
}

export const CreateTorneo = async (torneo: ITorneo) => {
    const liga = await LigaModel.findByPk(torneo.liga_id)
    if (!liga){
        return "No existe esa liga"
    }
    const response = await sequelize.transaction(async (t) => {
        const torneoCreado = await TorneoModel.create(torneo, { transaction: t })
        return torneoCreado    
    })
    return response
}

export const UpdateTorneo = async (id: string, data: ITorneo) => { 
    const torneo = await TorneoModel.findByPk(id);
    if (!torneo) {
        return "No existe ese Torneo";
    }
    const response = await sequelize.transaction(async (t) => {
        const torneoActualizado = await torneo.update(data,{ transaction: t });
        return torneoActualizado;
    })
    return response
}

export const DeleteTorneo = async (id: string) => {   
    const torneo = await TorneoModel.findByPk(id);
    if (!torneo) {
        return "No existe ese Torneo";
    }
    const response = await sequelize.transaction(async (t) => {
        const torneoEliminado = await torneo.destroy({ transaction: t });
        return torneoEliminado
    })
    return response;
}

