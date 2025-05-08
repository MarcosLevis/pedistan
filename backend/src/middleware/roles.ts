import { NextFunction, Request, Response } from "express";
import { IRequestExtendida } from "../interfaces/req.interface";
import LigaModel from "../models/liga.model";
import LigaAdministradorModel from "../models/liga_administrador.model";

export const isLigaAdmin = async (req: IRequestExtendida, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user_id = req.user?.id;
  
      if (!user_id) {
        res.status(401)
        res.send('Usuario no autenticado')
      }
  
      if (!id || isNaN(parseInt(id, 10))) {
        res.status(400)
        res.send('El id de la liga no es valido')
      }
      const liga_id = parseInt(id, 10);
        
      // Opcional: Verificar primero si la liga existe
      const liga = await LigaModel.findByPk(liga_id);
      if (liga) {
        req.liga = liga; // Adjuntar la liga al request para uso en el controlador
      }
  
      const adminEntry = await LigaAdministradorModel.findOne({
        where: {
          liga_id: liga_id,
          user_id: user_id
        }
      });
  
      if (!adminEntry) {
        res.status(403).json({ message: 'Acceso denegado. No eres administrador de esta liga.' });
      }
  
      next(); // El usuario es administrador, continuar
    } catch (error) {
        console.error("Error en middleware isLigaAdmin:", error);
        res.status(500).json({ message: 'Error interno del servidor al verificar administrador.' });
    }
  };