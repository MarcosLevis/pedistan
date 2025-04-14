import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"


const getLigas = (req:Request, res:Response) => {
  try{
  }catch(e){
      handleHttp(res, 'ERROR_GET_LIGA')
  }
}

const postLiga = ({body}: Request, res:Response) => {
  try{
    res.send(body)
  }catch(e){
      handleHttp(res, 'ERRO_POST_LIGA')
  }
}


export {getLigas, postLiga}