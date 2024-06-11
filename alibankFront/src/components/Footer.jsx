import './footer.css'
import wp from '../assets/wp.png'
import fb from '../assets/fb.png'
import ins from '../assets/ins.png'
import tx from '../assets/tx.png'

export const Footer = () => {
  return (
    <div className='f1'>
      <div className='c1'>
        <a href="https://www.whatsapp.com/?lang=es_LA" target='blank'><img className='wpLogo' src={wp} /></a>
      </div>
      <div className='c2'>
        <h3>Contactanos:</h3>
        <p>91-1234-567</p>
        <p>01-8000-123123 </p>
      </div>
      <div className='c2'>
        <h3>Nuestras redes sociales</h3>
        <p>@alibank</p>
        <p>@alibankInfo</p>
        <div>
          <a href="https://www.facebook.com/?locale=es_LA" target='blank'><img className='redes fb' src={fb} /></a>
          <a href="https://www.instagram.com/" target='blank'><img className='redes in' src={ins} /></a>
          <a href="https://twitter.com/?lang=es" target='blank'><img className='redes x' src={tx} /></a>
        </div>
      </div>
      <div className='c2'>
        <h3>Vía email</h3>
        <p>atencionCliente@alibank.com</p>
        <p>infoUsuario@alibank.com</p>
      </div>
      <div className='c5'>
        <p>FINANCIERA DE COLOMBIA</p>
        <p>SUPERINTENDENCIA</p>
        <h3>VIGILADO</h3>

      </div>
    </div>
  )
}
