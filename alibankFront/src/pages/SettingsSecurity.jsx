import { Link } from 'react-router-dom'
import logo_Alibank from '../assets/logo_Alibank.png'


export const SettingsSecurity = () => {
  return (
    <div className="containerPay">
      <Link to="/settings"><img className='logo' src={logo_Alibank} /></Link>
      <div className="containerSet2">
        <h3 className='subtitle'>Seguridad de tu cuenta</h3>
      </div>
    </div>
  )
}
