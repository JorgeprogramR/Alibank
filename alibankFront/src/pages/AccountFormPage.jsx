// 
import { useForm } from 'react-hook-form';

import styled from 'styled-components'


import { useAccounts } from '../context/AcountContext'

import { Link } from 'react-router-dom';
// 

// 
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

// 
import './acountForm.css'

// 
import logo_Alibank from '../assets/logo_Alibank.png'

// 
function AccountFormPage() {

    
    // 
    const { register, handleSubmit, setValue } = useForm();

    // 
    const { createAccount, getAccount, updateAccount } = useAccounts();

    // 
    const navigate = useNavigate();

    // 
    const params = useParams();

    // 
    useEffect(() => {

        // 
        const loadAccount = async () => {

            // 
            if (params.id) {
                const account = await getAccount(params.id)
                console.log(account)
                setValue('accountType', account.accountType)
                setValue('balance', account.balance)
            }
        }

        
        loadAccount()
    }, [])

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateAccount(params.id, data)
        } else {
            createAccount(data)
        }
        navigate('/accounts')
    })


    return (

        <div className="container1">
           
            <Link to="/accounts"><img className='logo' src={logo_Alibank} /></Link>
            <div className="container2">

                <h3 className='titleAccount'>Crear cuenta nueva</h3>

                <form onSubmit={onSubmit}>

                    <select
                        type="text"
                        placeholder='Tipo de cuenta'
                        {...register('accountType')}
                        className='accountT accountTr'
                        autoFocus
                    >
                        <option value="Cuenta de ahorros">Cuenta de ahorros</option>
                        <option value="Cuenta Corriente">Cuenta Corriente</option>
                    </select>


                    <input
                        type="number"
                        placeholder='Saldo inicial'
                        {...register('balance')}
                        className='balance'
                    />

                    <Boton1>Crear</Boton1>
                </form>

            </div>
        </div>
    )
}

export default AccountFormPage
const Boton1 = styled.button`
    background:goldenrod;
    display:block;
    margin:auto;
    padding:5px 15px;
    font-size:18px;
    border:none;
    border:1px solid black;
    border-radius: 5px;
    color:white;
    cursor:pointer;
    

    &:hover{
        background: #c5961d;
        box-shadow: 0 3px 5px gray;
    }
`;