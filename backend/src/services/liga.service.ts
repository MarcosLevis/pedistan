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
    const ligaCreada = await LigaModel.create(liga)
    const nuevoAdministrador = await LigaAdministradorModel.create({
        user_id: user.id,
        liga_id: ligaCreada.id,
      });   
    const response = ligaCreada    
    return response;
}

export const UpdateLiga = async (id: string, data: ILiga) => {
    try {
        const liga = await LigaModel.findByPk(id);
        if (!liga) {
            return null;
        }
        const response = await liga.update(data);
        return response;
    } catch (error) {
        console.error("Error al actualizar la liga en el service:", error);
        throw error;
    }
}

export const DeleteLiga = async (id: string) => {
    try {
        const liga = await LigaModel.findByPk(id);
        if (!liga) {
            return null;
        }
        const response = await liga.destroy();
        return response;
    } catch (error) {
        console.error("Error al eliminar la liga en el service:", error);
        throw error;
    }
}



