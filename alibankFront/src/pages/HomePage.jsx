import './homePage.css'
import { Link } from 'react-router-dom'
import logo_Alibank from '../assets/logo_Alibank.png'

export const HomePage = () => {
  return (
    
    <div className="contenedor">  
      <Link to="/"><img className='logo' src= {logo_Alibank} /></Link> 
      <div className="contenedor2">
        <header className="cabeza">
          <h1>Página de inicio</h1>
        </header>
        <p className="parrafo">Bienvenido a Alibank, su banco de confianza.</p>
        <p className="parrafo2">En la parte superior de nuestra Web podra encontrar los botones que le permitiran registrarse o ingresar a su usuario con el fin de que su experiencia sea mucho mejor.</p>
   
      </div>
    </div>
    
  )
}
