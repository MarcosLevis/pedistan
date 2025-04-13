import { NextFunction, Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { LigaService } from "../services/liga.service";
// import pool from '../database/db';


export class LigaController {

    static async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
          const ligas = await LigaService.getAll();
          res.json(ligas);
        } catch (err) {
          next(handleHttp);
        }
    }

// const getLiga = (req:Request, res:Response) => {
//     try{
//     }catch(e){
//         handleHttp(res, 'ERROR_GET_LIGA')
//     }
// }

// const postLiga = (req:Request, res:Response) => {
//     try{
//     }catch(e){
//         handleHttp(res, 'ERROR_POST_LIGA')
//     }
// }
// const updateLiga = (req:Request, res:Response) => {
//     try{
//     }catch(e){
//         handleHttp(res, 'ERROR_UPDATE_LIGA')
//     }
// }

// const deleteLiga = (req:Request, res:Response) => {
//     try{
//     }catch(e){
//         handleHttp(res, 'ERROR_DELETE_LIGA')
//     }
// }
}

// export {getLigas, getLiga, postLiga, updateLiga, deleteLiga}