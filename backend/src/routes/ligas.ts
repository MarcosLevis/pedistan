import { Request, Response, Router } from "express"
import { getLigas,postLiga } from "../controllers/liga.controller"

// import { getLigas,getLiga,postLiga,updateLiga,deleteLiga } from "../controllers/liga.controller"
const router = Router()

//le saco el /ligas por que ya el url va a tener el nombre del archivo entonces cuando haga un get me trae todas las ligas



router.get('/', getLigas)
router.post('/', postLiga)


export { router }