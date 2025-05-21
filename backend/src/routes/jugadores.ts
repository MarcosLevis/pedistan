import { Request, Response, Router } from "express";
import { getJugadores, postJugador,getJugadorById,updateJugador, deleteJugador } from "../controllers/jugador.controller"
import { checkJWT } from "../middleware/session";

const router = Router();

router.get("/", getJugadores);
router.get("/:id", getJugadorById)
router.post("/", checkJWT, postJugador);
router.put("/:id", checkJWT, updateJugador)
router.delete("/:id", checkJWT, deleteJugador)

export { router };
