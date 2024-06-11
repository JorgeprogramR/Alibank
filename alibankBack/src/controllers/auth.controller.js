// importamos el modelo del usuario
import User from "../models/user.model.js";

// importamos bcryptjs para encriptar la contraseña
import bcryptjs from "bcryptjs";

// importamos jwt
import jwt from 'jsonwebtoken'

// importamos la creacion de acceso del token
import { createAccessToken } from "../libs/jwt.js";

// importamos el token secreto
import { TOKEN_SECRET } from "../config.js";

// ----------------------------------------------------------------------
// ---------------register-----------------------

export const register = async (req, res) => {
  const { document, names, surnames, email, password } = req.body;

  try {
    //validamos el usuario
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json(["Este correo ya esta registrado"]);

    // encriptamos la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // creamos el usuario
    const newUser = new User({
      document,
      names,
      surnames,
      email,
      password: passwordHash,
    });

    // guardamos el usuario
    const userSaved = await newUser.save();

    // creamos el token
    const token = await createAccessToken({
      id: userSaved._id,
    });
    res.cookie("token", token);

    //--------------
    // respondemos con la informacion del usuario para el el front

    res.json({
        id: userSaved._id,
        document: userSaved.document,
        names: userSaved.names,
        surnames: userSaved.surnames,
        email: userSaved.email,
    });

    // si se presenta un error, respondemos con un json que indique el error
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};



// ----------------------login--------------------------

export const login = async (req, res)=>{
    const {password, email} = req.body 
    
    try {
// revisando si el usuario existe 

        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json({message: 'Usuario no encontrado'})
        
// comparamos la contraseña
        const isMatch = await bcryptjs.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({message: 'Contraseña incorrecta'})

// creamos el token en el login

        const token = await createAccessToken({id: userFound._id});

        res.cookie('token', token) 
// --------------
// respondemos con la informacion del usuario para el front
        res.json({
            id: userFound._id,
            document: userFound.document,
            names: userFound.names,
            surnames: userFound.surnames,
            email: userFound.email,
        });

// si se presenta un error, respondemos con un json que indique el error 
    } catch(error){
        res.status(500).json({message: error.message},
            console.log(error))
    }

};




// ------------------logout--------------------

export const logout = (req, res)=>{
    res.cookie('token', '', {
        expires: new Date(0)})
    return res.sendStatus(200)
}

//  validar token

export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message:'Usuario no encontrado'});

    return res.json({
        id: userFound._id,
        document: userFound.document,
        names: userFound.names,
        urnames: userFound.surnames,
        email: userFound.email,

    })

    // res.send('Profile')
};

export const verifyToken = async(req, res)=>{
    const {token} = req.cookies
    
    if (!token) return res.status(401).json({message: 'No autorizado'})

    jwt.verify(token, TOKEN_SECRET, async (err, user)=>{
        if (err) return res.status(401).json({message: 'No autorizado'});
        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(401).json ({message: 'No autorizado'})

        return res.json({
            id: userFound._id,
            names: userFound.names,
            email: userFound.email
        })
    })

}

