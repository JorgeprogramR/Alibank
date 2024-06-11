import React from 'react'
// 
import { useAccounts } from '../context/AcountContext.jsx'

import './countCard.css'
// 


export const AccountCard = ({account}) => {

    // este fragmento tenemos que eliminarlo

    let cuentaFull = account._id;

    let cuentaOrg = cuentaFull.substr(0, 10)

  return (
    <div className='containerCount'>
        <div className="cuentaNum header">
          <h3 className='countType'>{account.accountType}</h3>
          <p className='countNumber'><b>Número:</b> {cuentaOrg}</p>
        </div>
       <div className="balanced">
       <h4>Saldo:</h4>
        <p>$  {account.balance}.00</p>
       </div>
      </div>
  )
}
