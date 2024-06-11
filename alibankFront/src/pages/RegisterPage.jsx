import './register.css'

// 
import {useForm} from 'react-hook-form'
// 
import {useAuth} from '../context/AuthContext.jsx'

//
import { useEffect } from 'react'

// 
import { Link, useNavigate } from 'react-router-dom'
import logo_Alibank from '../assets/logo_Alibank.png'

// creamos la funcion registerPage
export const RegisterPage = () => {

  // 
  const { register, handleSubmit, formState:{errors}} = useForm();

  // 
  const {signup, isAuthenticated, errors: RegisterErrors} = useAuth();

  // 
  const navigate = useNavigate();

  // 
  useEffect(()=>{

    // 
    if (isAuthenticated) navigate('/accounts');
  }, [isAuthenticated]);

  // 
  const onSubmit = handleSubmit(async values => {signup(values)})
  return (
    <div className='contenedorP'>
      <Link to="/"><img className='logo' src= {logo_Alibank} /></Link> 
      <div className='contenedorS'>
        <h1 className='titulo'>Registro</h1>

        {
        RegisterErrors.map((error, i) =>(
          <div className='errors' key={i}>
            {error}
          </div>
        ))
      }
        <form onSubmit={onSubmit}>
            
          <input className='input' type="text" {...register('document', {required:true})} placeholder='Numero de documento'/>
          {errors.document && <p className='error-text'>El número de documento es requerido</p>}
          <input className='input' type="text" {...register('names', {required:true})}placeholder='Nombres'/>
          {errors.names && <p className='error-text'>Los nombres del usuario son requeridos</p>}
          {/* <input className='input' type="text" {...register('phone', {required:true})}placeholder='Numero telefonico'/> */}
          {errors.phone && <p className='error-text'>Los nombres del usuario son requeridos</p>}
          <input className='input' type="text" {...register('surnames', {required: true})} placeholder='Apellidos'/>
          {errors.surnames && <p className='error-text'>Los apellidos del usuario son requerido</p>}
          <input className='input' type="email" {...register ('email', {required:true})} placeholder='Correo Electronico'/>
          {errors.email && <p className='error-text'>El coreo electronico del usuario es requerido</p>}
          <input className='input' type="password" {...register('password', {required:true})} placeholder='Contraseña'/>
          {errors.password && <p className='error-text'>La contraseña es requerida</p>}
          <button type='submit' className='button1'>Registrarse</button>
        </form>


      </div>
    </div>
  )
}
