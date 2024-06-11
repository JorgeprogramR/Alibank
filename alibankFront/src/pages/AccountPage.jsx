import { useEffect } from 'react'
import { useAccounts } from '../context/AcountContext.jsx'
import { AccountCard } from '../components/AccountCard.jsx'
import './acountPage.css'
import logo_Alibank from '../assets/logo_Alibank.png'
import { Link } from 'react-router-dom'

function AccountPage() {

    const { getAccounts, accounts } = useAccounts();

    useEffect(() => {
        getAccounts()
    }, []);

    if (accounts.length === 0) return (
       <div className='container4'>
        <Link to="/accounts"><img className='logo' src={logo_Alibank} /></Link>
        <div className="container5">
        <h4 className='subtitle'>No se encontraron cuentas</h4>
        <Link to='/add-account' className='add-count1'> + agregar cuenta</Link>
        </div>
        </div>
    )

    return (
       <div className="container6">
        <Link to="/accounts"><img className='logo' src={logo_Alibank} /></Link>
         <div className='container7'>
                {accounts.map(account => (
                    <AccountCard  account={account} key={account._id} />
                ))}
                <Link to='/add-account' className='add-count2'> + agregar cuenta</Link>
            </div>
            
       </div>

    )
}

export default AccountPage