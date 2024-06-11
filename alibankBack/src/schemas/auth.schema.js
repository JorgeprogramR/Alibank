// validamos los datos que vienen desde el cliente (comparamos los datos que llegan al backend frente a un esquema que previamente hemos creado desde aca y si coinciden el flujo de la app continua, sino coinciden muestra el error)

// zod nos permite crear un schema similar al de mongoose y comparamos 

// z nos permite dar tipos de datos 

import {z} from 'zod';

export const registerSchema = z.object({
    document: z.string({
        required_error: 'El documento es requerido'
    }),
    names: z.string({
        required_error: 'Los nombres son requeridos'
    }),
    surnames: z.string({
        required_error: 'Los apellidos son requeridos'
    }),
    email: z.string({
        required_error: 'El correo es requerido'
    }).email({
        message: 'El correo no es valido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }). min(6,{
        message: 'La contraseña debe tener minimo 6 caracteres'
    })

});

// --------------------------------------------------------

export const loginSchema = z.object({
    email:z.string({
        required_error: 'El correo es requerido'
    }).email({
        message: 'Correo no valido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }). min(6,{
        message: 'La contraseña debe tener minimo 6 caracteres'
    })
});



// aqui ira el esquema del pago y demas
