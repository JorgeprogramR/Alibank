// import './payments.css'
// import styled from 'styled-components'
// // import { useAuth } from '../context/AuthContext'
// import { Link } from 'react-router-dom'
// // import { useState } from 'react'
// import logo_Alibank from '../assets/logo_Alibank.png'
// import { useEffect } from 'react'
// import { useAccounts } from '../context/AcountContext.jsx'
// import { AccountCard } from '../components/AccountCard.jsx'


// function Payments(){

//   // const { user } = useAuth()

//   const {getAccounts, accounts} = useAccounts();

//   // 
//   useEffect(()=>{
//     getAccounts()
//   },[])

//   if(!Array.isArray(accounts) ||accounts.length === 0)
//     return(
//       <h1>No se encuentran cuentas</h1>
//     )

//   return (
    
//     <ContainPay>
//       <Link to='add-account' > + Agregar una cuenta nueva</Link>
//       <div className=''>
//         {accounts.map(account =>(
//           <AccountCard account={account} key={account._id}/>
//         ))}

//       </div>
//       </ContainPay>
        

//   )
// }

// export default Payments

// const ContainPay = styled.div`
//   display: flex;
//   flex-direcction: column;
//   align-items:center;
//   justify-content: center;

// select{
//   display: block;
//   width: 100%;
//   margin: 20px auto 30px auto;
//   background: #3f3f3f;
//   color: #fff;
//   padding: 7px 0 7px 10px;
//   border-radius: .5rem;
//   font-size: 15px; 
//   border:none;
//   cursor: pointer;
// }

// option{
//   color: gray;
//   display:block;
//   margin: 10px 0 2px 0;
// }


  
// `;

// // const Boton = styled.button`
// //   display:block;
// //   font-size:18px;
// //   margin: auto;
// //   text-decoration: none;
// //   background: goldenrod;
// //   border: none;
// //   cursor:pointer;
// //   color: white;
// //   border: 1px solid black;
// //   border-radius: 5px;
// //   padding: 5px 15px 5px 15px;
// //   transition: all .3s;
// //   margin-bottom: 30px;

// //   &:hover{
// //   background: #c5961d;
// //   box-shadow: 0 3px 5px gray;
// //   }
// // `;