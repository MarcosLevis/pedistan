import { Router } from "express";
import {readdirSync} from "fs";

//este archivo es basicamente para importar todos los routes en una sola linea en el app.ts

//esta variable es de node y nos va a devolver la ruta del directorio actual
const PATH_ROUTER = `${__dirname}` 

//limpia el nombre del archivo y le saca el .ts
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift()
    return file
}

//esta funcion escanea los archivos dentro del directorio actual osea routes, limpia sus nombres
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if (cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`se esta cargando la ruta... /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

const router = Router()
export { router }