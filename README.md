# api-backend-buenas-practicas
Proyecto backend para crear una api con buenas prácticas

### Dependencias
· nodemon (dev): Para ver los cambios al guardar el fichero

· express: Infraestructura de NodeJS

### Scripts
· npm run dev: Activa el entorno de desarrollo, con la dependencia nodemon, que escucha los cambios y refresca el servidor

· npm run start: Activa el servidor final (simula la puesta en produccion)

### Versionado
Creamos una primera version (v1) para comenzar el proyecto

Si luego queremos crear una nueva version, añadiremos un nuevo use (app.use("/api/v2", v2Router)) donde añadimos la nueva carpeta de version (v2) y gestionaremos todo lo que vaya en esta nueva version

### Nombrado rutas
Una buena práctica en el nombrado de las rutas, es crear una url para cada servicio que contenga sus rutas/metodos y cuelguen de él

### Controladores
Creamos un controller donde crearemos los métodos que usaremos en cada ruta del CRUD, y de esta forma dejamos las rutas mas limpias y legibles de que vamos a hacer. También centralizamos todo en un único fichero y si modificamos un controlador, sirve para todos los sitios donde se use

### Servicios
Creamos un servicio donde llevaremos la lógica de negocio y no tenerlo en los controladores, y de esta forma dejamos los controladores mas limpios y legibles, como las rutas, y podemos crear métodos que podamos tener mas claros y ordenados