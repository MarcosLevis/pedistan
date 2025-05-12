import { Router } from "express";
import { getTorneos, postTorneo,getTorneoById,updateTorneo, deleteTorneo } from "../controllers/torneo.controller";
import { checkJWT } from '../middleware/session';
import { isLigaAdmin } from "../middleware/roles";


import { router as partidaRouter } from './partidas'; 
// mergeParams: true permite acceder a los parámetros de la ruta padre (ej. :id de la liga)
const router = Router({ mergeParams: true });

//le saco el /Torneos por que ya el url va a tener el nombre del archivo entonces cuando haga un get / me trae todas las torneos
// Estas rutas son relativas al punto de montaje en ligas.ts (ej. /ligas/:id/torneos)
// El middleware isLigaAdmin usará el :id (liga_id) de req.params gracias a mergeParams.
// Crear un torneo para la liga :id
// POST / (se convierte en /ligas/:id/torneos)
router.get("/", getTorneos);
router.get("/:torneo_id", getTorneoById)
router.post("/", checkJWT, isLigaAdmin, postTorneo);
router.put("/:torneo_id", checkJWT, isLigaAdmin, updateTorneo)
router.delete("/:torneo_id", checkJWT, isLigaAdmin, deleteTorneo)

router.use('/:torneo_id/partidas', partidaRouter);

export { router };
