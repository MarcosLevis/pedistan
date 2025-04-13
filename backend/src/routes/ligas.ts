import { Request, Response, Router } from "express"
import pool from '../config/db';

const router = Router()

//le saco el /ligas por que ya el url va a tener el nombre del archivo entonces cuando haga un get me trae todas las ligas
router.get('/',async (req:Request,res:Response)=>{
    try {
        const result = await pool.query('SELECT * FROM ligas');
        res.json(result.rows);
    } catch (err) {
        console.log('upsis')
        console.error(err);
        res.status(500).send('Error en la base de datos');
    }
})

export { router }