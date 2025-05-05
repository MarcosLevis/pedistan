import { Request, Response, Router } from "express";
import { getLigas, postLiga,getLigaById,updateLiga, deleteLiga } from "../controllers/liga.controller";
import { logMiddleware } from "../middleware/log";
import { checkJWT } from '../middleware/session';

const router = Router();

//le saco el /ligas por que ya el url va a tener el nombre del archivo entonces cuando haga un get / me trae todas las ligas

router.get("/", getLigas);
router.get("/:id",logMiddleware,getLigaById)
router.put("/:id",checkJWT, updateLiga)
router.post("/", postLiga);
router.delete("/:id", deleteLiga)

export { router };
