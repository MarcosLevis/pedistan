import { sequelize } from "../database/postgres";
import { JwtPayloadExtendida } from "../interfaces/jwt.interface";
import { ILiga } from "../interfaces/liga.interface"
import LigaModel from "../models/liga.model"
import LigaAdministradorModel from "../models/liga_administrador.model";

//LA LOGICA DE NEGOCIO VA EN EL SERVICE NO EN EL CONTROLER

export const GetLigas = async () => {
    const response = await LigaModel.findAll()
    return response;
}

export const GetLigaById = async(id: string) => {
    const response = await LigaModel.findByPk(id)
    return response;
}

export const CreateLiga = async (liga: ILiga, user: JwtPayloadExtendida) => {
    const response = await sequelize.transaction(async (t) => {
        const ligaCreada = await LigaModel.create(liga, { transaction: t })
        const nuevoAdministrador = await LigaAdministradorModel.create({
            user_id: user.id,
            liga_id: ligaCreada.id,
        },{ transaction: t }); 
        return ligaCreada    
    })
    return response
}

export const UpdateLiga = async (id: string, data: ILiga) => { 
    const liga = await LigaModel.findByPk(id);
    if (!liga) {
        return "No existe esa liga";
    }
    const response = await sequelize.transaction(async (t) => {
        const ligaActualizada = await liga.update(data,{ transaction: t });
        return ligaActualizada;
    })
    return response
}

export const DeleteLiga = async (id: string) => {   
    const liga = await LigaModel.findByPk(id);
    if (!liga) {
        return null;
    }
    const response = await sequelize.transaction(async (t) => {
        const ligaEliminada = await liga.destroy({ transaction: t });
        return ligaEliminada
    })
    return response;
}