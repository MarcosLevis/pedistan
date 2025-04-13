import { Request, Response, Router } from "express"

const router = Router()

//le saco el /torneos por que ya el url va a tener el nombre del archivo entonces cuando haga un get me trae todas los torneos
router.get('/',(req:Request,res:Response)=>{
    res.send({data: "ACA_VAN_LOS_MODELOS"})
})

export { router }