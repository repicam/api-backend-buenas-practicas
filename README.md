# api-backend-buenas-practicas
Proyecto backend para crear una api con buenas prácticas

### Dependencias
· nodemon (dev): Para ver los cambios al guardar el fichero
· express: Infraestructura de NodeJS

### Scripts
· npm run dev: Activa el entorno de desarrollo, con la dependencia nodemon, que escucha los cambios y refresca el servidor
· npm run start: Activa el servidor final (simula la puesta en produccion)

### Versionado
Creamos una primera version (v1) para comenzar el proyecto. Si luego queremos crear una nueva version, añadiremos un nuevo use (app.use("/api/v2", v2Router)) donde añadimos la nueva
carpeta de version (v2) y gestionaremos todo lo que vaya en esta nueva version