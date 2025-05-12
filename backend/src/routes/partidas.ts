import { Router } from "express";
import { getPartidas, postPartida ,getPartidaById ,updatePartida, deletePartida } from "../controllers/partida.controller";
import { checkJWT } from '../middleware/session';
import { isLigaAdmin } from "../middleware/roles";

// mergeParams: true permite acceder a los parámetros de la ruta padre (ej. :id de la liga)
const router = Router({ mergeParams: true });

router.get("/", getPartidas);
router.get("/:partida_id", getPartidaById)
router.post("/", checkJWT, isLigaAdmin, postPartida);
router.put("/:partida_id", checkJWT, isLigaAdmin, updatePartida)
router.delete("/:partida_id", checkJWT, isLigaAdmin, deletePartida)

export { router };
