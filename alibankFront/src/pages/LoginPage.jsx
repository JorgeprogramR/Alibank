import './login.css'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
// ------------------------
import { useAuth } from '../context/AuthContext.jsx'
import logo_Alibank from '../assets/logo_Alibank.png'


export const LoginPage = () => {

  // 
  const { register, handleSubmit, formState: { errors } } = useForm();

  // 
  const { signin, errors: signinError, isAuthenticated } = useAuth();

  // 
  const onSubmit = handleSubmit(data => {
    signin(data)
  });

  //
  const navigate = useNavigate();

  // 
  useEffect(() => {
    if (isAuthenticated) navigate('/accounts'), [isAuthenticated];
  })

  // 
  return (
    <div className='contenedorPr'>
      <Link to="/"><img className='logo' src={logo_Alibank} /></Link>
      <div className='contenedorSg'>

        <h1 className='titulo'>Iniciar sesión</h1>
        
        {
          signinError.map((error, i)=>(
            <div className='errors' key={i}>{error}</div>
          ))
        }
        <form onSubmit={onSubmit}>

          <input className='input2' type="email" {
            ...register('email', { required: true })
          } placeholder='Correo electronico' />
          {errors.email && <p className='error-text'>El correo es requerido</p>}

          <input className='input2' type="password" {
            ...register('password', { required: true })
          } placeholder='Contraseña' />
          {errors.password && <p className='error-text'>La contraseña es requerida</p>}

          <button type='submit' className='button1'>Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}
