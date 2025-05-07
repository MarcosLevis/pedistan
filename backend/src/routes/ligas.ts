import { Request, Response, Router } from "express";
import { getLigas, postLiga,getLigaById,updateLiga, deleteLiga } from "../controllers/liga.controller";
import { checkJWT } from '../middleware/session';
import { isLigaAdmin } from "../middleware/roles";

const router = Router();

//le saco el /ligas por que ya el url va a tener el nombre del archivo entonces cuando haga un get / me trae todas las ligas

router.get("/", getLigas);
router.get("/:id", getLigaById)
router.post("/", checkJWT, postLiga);
router.put("/:id", checkJWT, isLigaAdmin, updateLiga)
router.delete("/:id", checkJWT, isLigaAdmin, deleteLiga)

export { router };
