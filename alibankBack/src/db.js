// importamos mongoose para acceder a sus metodos
import mongoose from 'mongoose';

// realizamos la exportacion en una constante llamada connectDB y desde el index la consumimos
export const connectDB = async()=>{

// conectamos a la base de datos por medio del link generado

    try{
        await mongoose.connect('mongodb+srv://jorgeorincono:1030655045Jv@cluster0.tkroekh.mongodb.net/alibank?retryWrites=true&w=majority&appName=Cluster0'); 

        // si se conecta, nos mostrara un mensaje por consola
        console.log('Conectado a la base de datos');


    }
    
    // si no conecta nos muestra el error que tiene por consola
    catch(error){
        console.log(error)
    }
};