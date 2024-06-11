import { useEffect } from "react";

import { useAccounts } from "../context/AcountContext";

import {AcountDeleteCard} from '../components/AcountDeleteCard.jsx'

import './settingOff.css'

import logo_Alibank from '../assets/logo_Alibank.png';

import { Link } from "react-router-dom";


function SettingsOff() {

  const {getAccounts, accounts}  = useAccounts();

  useEffect(()=>{
    getAccounts()
  },[])

  if(accounts.length === 0) return(
    <div className='container4'>
        <Link to="/accounts"><img className='logo' src={logo_Alibank} /></Link>
        <div className="container5">
        <h4 className='subtitle'>No se encontraron cuentas</h4>
        <Link to='/add-account' className='add-count1'> + agregar cuenta</Link>
        </div>
        </div>
  )
  return (
    <div className="container8">
    <Link to="/accounts"><img className='logo' src={logo_Alibank} /></Link>
     <div className='container9'>
            {accounts.map(account => (
                <AcountDeleteCard  account={account} key={account._id} />
            ))}
            <Link to='/add-account' className='add-count2'>Regresar a crear cuenta</Link>
        </div>
        
   </div>
  )
}

export default SettingsOff