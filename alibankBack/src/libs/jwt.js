// importamos la biblioteca jwt para poder acceder a sus metodos
import jwt from 'jsonwebtoken';

// asi mismo importamos nuestro token secreto
import { TOKEN_SECRET } from '../config.js';

// creamos la funcion de crear acceso 

export function createAccessToken(payload){

    return new Promise((resolve, reject) =>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d'
            },
            (err, token)=>{
                if(err) reject(err)
                    resolve(token)
            }
        );
    })
}
