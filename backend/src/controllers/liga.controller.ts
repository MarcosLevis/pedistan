import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { createLiga, listLigas } from "../services/liga.service"


const getLigas = async (req:Request, res:Response) => {
  try{
    const response = await listLigas()
    res.send(response)
  }catch(e){
      handleHttp(res, 'ERROR_GET_LIGA',e)
  }
}

const postLiga = async ({body}: Request, res:Response) => {
  try{
    const responseLiga = await createLiga(body)
    res.send(responseLiga)
  }catch(e){
      handleHttp(res, 'ERROR_POST_LIGA', e)
  }
}


export {getLigas, postLiga}