1. lo estoy haciendo basandome en este video:

https://www.youtube.com/watch?v=T1QFGwOnQxQ

2. No le instale mongoose cuando instalo todas las dependencias, creo que no lo voy a usar. Quiero hacerlo con postgresql

3. modelo en capas M V C 
//esto es del hindu
4. No es clean arquitecture a fondo, vamos a crear archivos ruta que solo tengan la logica de la ruta

5. controlador es la orquestacion entre infraestructura y logica de negocio. Solo se entera de lo que viene por http, recibe y responde

6. uso el siguiente video del hindu para usar sequilize https://www.youtube.com/watch?v=HG8fii3NlnQ&list=PLi7YL8I_RfWI8x8E4hJIQwPCNzTA_CCQK&index=1

7. sequilize oficial

8. Middleware :
- Funcion que esta en la mitad entre las rutas y el controllador. 
- Sirven para observar las cosas que estan sucediendo:
- Log para ver que se esta consultando a la api
- Proteger rutas que solo se accedan bajo token de sesion
- Proteger rutas por roles
- etc