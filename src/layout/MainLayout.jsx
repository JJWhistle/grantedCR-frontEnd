import Footer from "../components/Footer";
import Header from "../components/Header";
import whatsapp from '../assets/icons/whatsapp.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import gmail from '../assets/icons/gmail.svg';
const MainLayout = () => {
  return (
    <>
        <Header/>
        <main className="main">
            <div className='main__container'>
                <div className='main__wrapper'>          
                    <h2 className='main__title'>Let us know how we can help!</h2>
                    <p className="main__text">Reach out to any of our tools!</p>


                    <div className="main__icons">
                        <a href="https://wa.me/50688948665" target='_blank'><img src={whatsapp} className="main__icon" alt="whatsapp logo" /></a>
                        <a href="https://www.facebook.com/grantedcr" target='_blank'><img src={facebook} className="main__icon" alt="facebook logo" /></a>
                        <a href="https://www.instagram.com/grantedcr?igshid=MmIzYWVlNDQ5Yg==" target='_blank'><img src={instagram} className="main__icon" alt="instagram logo" /></a>
                        <a href="https://mailto:jasson.grant97@gmail.com" target='_blank'><img src={gmail} className="main__icon" alt="instagram logo" /></a>
                    </div>


                </div>
            </div>
        </main>

        <Footer/>
    </>

    
  )
}

export default MainLayout