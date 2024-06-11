// importamos express para acceder a sus metodos
import express from 'express';

// morgan nos ayuda a mostrar lo que sucede cuando hacemos las solicitudes http
import morgan from 'morgan';

// cookie parser nos ayuda analizar las cookies de las solicitudes http
import cookieParser from 'cookie-parser';

// importamos las rutas para el login y el register
import authRoutes from './routes/auth.routes.js'

// importamos las rutas de las cuentas
import accountRoutes from './routes/acount.routes.js'

// aca importaremos las rutas de pagos en un futuro
// -------------------------

// importamos cors para que podamos correr back y front sin lios por el puerto 
import cors from 'cors';


// -----------------------------------------------------

// ejecutamos express declarandolo en una constante
const app = express();


// -----------midlewares-------------------

// ejecutamos cors.....

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


// usamos morgan cuando iniciamos el proyecto con el script 'dev
app.use(morgan('dev'));

// la siguiente linea nos servira para analizar el cuerpo de las solicitudes y convertirlas a .json
app.use(express.json());

// nos sirve para habilitar el midleware (cookieParser), basicamente lo inicializamos
app.use(cookieParser());







// -------------consumimos las rutas---------------------------

// le damos primero un valor previo a las rutas, en este caso es '/api'

// iniciamos con auenticacion
app.use('/api', authRoutes)
app.use('/api', accountRoutes)


// proximamente se hara 

// exportamos por defecto app

export default app;