import './settingsp.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo_Alibank from '../assets/logo_Alibank.png'
import { useAuth } from '../context/AuthContext.jsx'
import { useState } from 'react'
import { EditName } from '../components/EditName.jsx'

export const SettingsProfile = () => {
  const { user } = useAuth();

  const [Edit, setEdit] = useState(false)

  return (
    <div className="containerPay">
      <Link to="/settings"><img className='logo' src={logo_Alibank} /></Link>
      <div className="containerSet3">
        <h3 className='subtitle'>Perfil del usuario</h3>
        {/* primer boton */}
        <Link onClick={() => setEdit(!Edit)} className='subContainer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle element1" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
          <div className="text element2">
            <h4 className='NameEdit'>{user.names}</h4>
            <p>Aqui puedes escribir como quieres que te llamemos.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right element3" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </Link>
        <EditName
          state={Edit}
          changeState={setEdit}>

          <ContainE>
            <div>
              <p>Cambiar nombre de usuario</p>
              <h3 className='newName'>Nombre nuevo:</h3>
              <input type="text" placeholder={user.names} />
              <Boton>Confirmar</Boton>
            </div>
          </ContainE>

        </EditName>

        {/* segundo Boton */}

        <Link to='#' className='subContainer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-at element1" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
          </svg>
          <div className="text element2">
            <h4 className='NameEdit'>{user.email}</h4>
            <p>Aqui puedes modificar tu email para recibir informacion relacionada a tu cuenta.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right element3" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </Link>

        {/* Tercer elemento */}

        <Link to='#' className='subContainer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-plus element1" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            <path fillRule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
          </svg>
          <div className="text element2">
            <h4 className='NameEdit'>Teléfono</h4>
            <p>Aqui puedes agregar tu numero de telefono o modificarlo.</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right element3" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </Link>
      </div>
    </div>
  )
}


const ContainE = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p{
    display: inline-block;
    width: 300px;
    font-size:15px;
    text-align:center;
    margin-bottom:35px;
  }  


  input{
    display: block;
    width: 100%;
    margin: 15px auto;
    background: #3f3f3f;
    color: #fff;
    padding: 7px 0 7px 10px;
    border-radius: .5rem;
    font-size: 15px; 
    border:none;
    margin-bottom:50px
  }

`;

const Boton = styled.button`
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

  &:hover{
  background: #c5961d;
  box-shadow: 0 3px 5px gray;
  }
`;