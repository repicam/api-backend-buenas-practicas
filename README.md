# api-backend-buenas-practicas
Proyecto backend para crear una api con buenas prácticas

## 1 Desarrollo de la API

### 1.1 Dependencias
· nodemon (dev): Para ver los cambios al guardar el fichero

· express: Infraestructura de NodeJS

### 1.2 Scripts
· npm run dev: Activa el entorno de desarrollo, con la dependencia nodemon, que escucha los cambios y refresca el servidor

· npm run start: Activa el servidor final (simula la puesta en produccion)

### 1.3 Versionado
Creamos una primera version (v1) para comenzar el proyecto

Si luego queremos crear una nueva version, añadiremos un nuevo use (app.use("/api/v2", v2Router)) donde añadimos la nueva carpeta de version (v2) y gestionaremos todo lo que vaya en esta nueva version

### 1.4 Nombrado rutas
Una buena práctica en el nombrado de las rutas, es crear una url para cada servicio que contenga sus rutas/metodos y cuelguen de él

### 1.5 Controladores
Creamos un controller donde crearemos los métodos que usaremos en cada ruta del CRUD, y de esta forma dejamos las rutas mas limpias y legibles de que vamos a hacer. También centralizamos todo en un único fichero y si modificamos un controlador, sirve para todos los sitios donde se use

### 1.6 Servicios
Creamos un servicio donde llevaremos la lógica de negocio y no tenerlo en los controladores, y de esta forma dejamos los controladores mas limpios y legibles, como las rutas, y podemos crear métodos que podamos tener mas claros y ordenados

### 1.7 Acceso a datos
Creamos un json con datos dummy para poder implementar los métodos GET (getAll y getOne) y testear la API

### 1.8 Middleware
Usaremos el middleware bodyParser, que se encuentra dentro de express (express.json()), para parsear todas las llamadas donde nos envien un body y trasnformarlo a json, para que sea mas manejable para nuestra API 

### 1.9 Lógica para crear, modificar y eliminar registros
Adaptamos nuestra API para poder "modificar" nuestro fichero dummy de datos con fs (FileSystem)

En el servicio, importamos la version 4 de uuid (renombrado en el import como uuid, para legibilidad), que usaremos para generar un id a nuestro nuevo registro

### 1.10 Control de errores y códigos HTTP
Para que nuestra API sea mejor usada, mas fácil de manejar y de entender por los usuarios que hagan uso, debemos controlar los errores que puedan haber y contestar con mensajes descriptivos. Por eso, vamos a adaptar nuestra API realizando los cambios pertinentes

## 2 Ampliamos nuestra API

Para añadirle mas "miga" vamos a ampliar la API

### 2.1 Agrupacion de recursos y rutas anidadas
Nuestros productos, pueden tener un historial de ventas, por lo que creamos uno para cada producto, y aqui entran las rutas anidadas, porque consultamos el historial de cada producto en específico

#### En relación...
Por anidar rutas para obtener recursos, no es recomendable anidar mas de tres niveles (por ejemplo: /api/v1/products/:productId/records/members/:memberId) para acceder a una información mas detallada. Si en el historial de ventas, en lugar de la cantidad de productos totales vendidos, tuvieramos la cantidad que compra un usuario con ese usuario, nuestro objeto records tendría una apariencia similar a la siguiente:

{
    "id": "ad75d475-ac57-44f4-a02a-8f6def58ff56",
    "product": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
    "amount": "2",
    "memberId": "11817fb1-03a1-4b4a-8d27-854ac893cf41",
    "uri": "/members/:memberId"
}

De esta forma, accediendo a nuestro endpoint /api/v1/products/:productId/records, obtenemos la información de la compra (id del producto y la cantidad) con el usuario y el endpoint (uri) para obtener la información de ese usuario si nos hiciera falta, o viceversa, para consultar las compras de un usuario (/api/v1/members/:memberId/records) donde obtendremos todas las compras del usuario indicado con los productos y cantidad