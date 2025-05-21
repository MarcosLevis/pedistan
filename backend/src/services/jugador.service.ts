import { sequelize } from "../database/postgres";
import { JwtPayloadExtendida } from "../interfaces/jwt.interface";
import { IJugador } from "../interfaces/jugador.interface"
import JugadorModel from "../models/jugador.model"

//LA LOGICA DE NEGOCIO VA EN EL SERVICE NO EN EL CONTROLER

export const GetJugadores = async () => {
    const response = await JugadorModel.findAll()
    return response;
}

export const GetJugadorById = async(id: string) => {
    const response = await JugadorModel.findByPk(id)
    return response;
}

export const CreateJugador = async (jugador: IJugador) => {
    const response = await sequelize.transaction(async (t) => {
        const jugadorCreado = await JugadorModel.create(jugador, { transaction: t })
        return jugadorCreado 
    })
    return response
}

export const UpdateJugador = async (id: string, data: IJugador) => { 
    const jugador = await JugadorModel.findByPk(id);
    if (!jugador) {
        return "No existe ese jugador";
    }
    const response = await sequelize.transaction(async (t) => {
        const jugadorActualizado = await jugador.update(data,{ transaction: t });
        return jugadorActualizado;
    })
    return response
}

export const DeleteJugador = async (id: string) => {   
    const jugador = await JugadorModel.findByPk(id);
    if (!jugador) {
        return "No existe esa jugador";
    }
    const response = await sequelize.transaction(async (t) => {
        const jugadorEliminado = await jugador.destroy({ transaction: t });
        return jugadorEliminado
    })
    return response;
}