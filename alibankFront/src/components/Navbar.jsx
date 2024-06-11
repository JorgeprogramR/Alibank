import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth }from '../context/AuthContext.jsx'
import './navbar.css'
import { Modal } from './Modal.jsx'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const {isAuthenticated, logout, user} = useAuth();

  const [PopUp, setPopUp] = useState(false)

  return (
    <>
      <nav className='navegador'>
        <div className='enlaces'>
          { isAuthenticated ? (
            <>
            <div className='welcome'>Hola.<p className='firstName'>{user.names && user.names.split(' ')[0]}</p></div>
            
            <Link to='/settings' className='settingM'>Ajustes</Link>
            <Boton 
            to='/'
            onClick={()=>{
              logout();
            }}>
              Salir</Boton>

              </>
          ):(
            <>
            <Link to='/login'>Ingresar</Link>
            <Link to='/register'>Registrarse</Link>
            <Boton onClick={()=>setPopUp(!PopUp)}>Recargar</Boton>
            <Modal
              state={PopUp}
              changeState={setPopUp}
            >
              <Contain>
                <form>
                  <p className='defaultCursor'>En este modulo podemos realizar transferencias de una cuenta a otra</p>
                  <input type="text" placeholder='Cuenta a recargar' />
                  <input type="text" placeholder='¿Cuanto recargar?' />
                  <textarea placeholder='Mensaje'/>
                  <Boton2>Transferir</Boton2>
                </form>
              </Contain>
            </Modal>
            </>
          )
          } 
        </div>
      </nav>
    </>  
  )
}


const Boton = styled.div`
  text-decoration: none;
  background: goldenrod;
  border: none;
  cursor:pointer;
  color: white;
  border-top:1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 0 0 5px 5px;
  padding: 5px 15px 5px 15px;
  transition: all .3s;

  &:hover{
    background: #c5961d;
    box-shadow: 0 3px 5px gray;
  }
`;

const Contain = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    font-size:15px;
    text-align:center;
    margin-top:20px;
    margin-bottom:35px;
  }  
  

  input{
    display: block;
    width: 80%;
    margin: 15px auto;
    background: #3f3f3f;
    color: #fff;
    padding: 7px 0 7px 10px;
    border-radius: .5rem;
    font-size: 15px; 
    border:none;
  }

  textarea{
    display: block;
    width: 80%;
    height: 100px;
    margin: 15px auto;
    background: #3f3f3f;
    color: #fff;
    padding: 7px 0 7px 10px;
    border-radius: .5rem;
    font-size: 15px; 
    border:none;
  }

`;


const Boton2 = styled.button`
  display:block;
  font-size:18px;
  margin: auto;
  text-decoration: none;
  background: goldenrod;
  border: none;
  cursor:pointer;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  transition: all .3s;
  margin-bottom: 30px;

&:hover{
  background: #c5961d;
  box-shadow: 0 3px 5px gray;
}
`;