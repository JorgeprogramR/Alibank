import React from 'react'

import { useAccounts } from '../context/AcountContext'

import './accountDeleteCard.css'



export const AcountDeleteCard = ({account}) => {

    const {deleteAccount} = useAccounts()

    let cuentaFull = account._id;

    let cuentaOrg = cuentaFull.substr(0, 10)

  return (
   <>
    <h3 className='accountTitle'>Cuentas inscritas</h3>
    <div className="containerCount1">
        <div className="header3">
            <div className="header4">
            <h3 className="countType2">{account.accountType}</h3>
            <p className="countNumber2"><b>Número:</b>{cuentaOrg}</p>
            </div>

            <button onClick={()=>{
                deleteAccount(account._id)
            }} className='button2'>Eliminar cuenta</button>
        </div>
    </div></>
  )
}
