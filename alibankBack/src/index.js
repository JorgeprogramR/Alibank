// importamos app.js quien es la que contiene a los demas servicios
import app from './app.js';

// importamos la conexion a la base de datos

import { connectDB } from './db.js';

// con la importacion de app accedemos al metoodo expres .listen para iniciar un servidor, en este caso por el puerto 300

app.listen(3000);

// mostramos en que puerto esta corriendo el servidor
console.log('Servidor en el puerto', 3000);

// ejecutamos la conexion a la base de datos

connectDB();
