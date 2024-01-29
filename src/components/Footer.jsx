import whatsapp from '../assets/icons/whatsapp.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import gmail from '../assets/icons/gmail.svg';

const Footer = () => {
  return (
    <>
    
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__wrapper">
            <h2 className='footer__title'>Let us know how we can help!</h2>
            <p className="footer__text">Reach out to any of our tools!</p>
            
            <div className="footer__icons">
              <a href="https://wa.me/50688948665" target='_blank'><img src={whatsapp} className="footer__icon" alt="whatsapp logo" /></a>
              <a href="https://www.facebook.com/grantedcr" target='_blank'><img src={facebook} className="footer__icon" alt="facebook logo" /></a>
              <a href="https://www.instagram.com/grantedcr?igshid=MmIzYWVlNDQ5Yg==" target='_blank'><img src={instagram} className="footer__icon" alt="instagram logo" /></a>
              <a href="mailto:jasson.grant97@gmail.com" target='_blank'><img src={gmail} className="footer__icon" alt="instagram logo" /></a>
            </div>
            
            <p className='footer__copyright'>&copy; Granted Costa Rica all rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer