import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/icons/Logo";
import menu from '../assets/icons/menu.svg';

const Bar = () => {
    const [showNav, setShowNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    window.onscroll = () => {
        const scroll = window.scrollY;

        if(scroll > 10) {
            setScrolled(true);
            return;
        }

        setScrolled(false);

    }
  return (
    <>
        <div className={`bar ${scrolled && 'bar-scrolled'}`}>
            <div className="bar__wrapper">
                <span className='bar__icon'>
                    <img src={menu} alt="Menu Icon" onClick={() => setShowNav(!showNav)} />
                </span>
            </div>
                
            <div className="bar__wrapper">
                <div className='bar__flex'>
                    <Link to={'/'} className='bar__link'>
                        <Logo scrolled={scrolled} />
                    </Link>
                        
                    <nav className={`navBar ${showNav && 'showNav'}`}>
                        <NavLink to={'/'} className={`navBar__link ${scrolled && 'navBar__link-scrolled'}`}>Home</NavLink>
                        <NavLink to={'/tours'} className={`navBar__link ${scrolled && 'navBar__link-scrolled'}`}>Tours</NavLink>
                        <NavLink to={'/real-estate'} className={`navBar__link ${scrolled && 'navBar__link-scrolled'}`}>Real Estate</NavLink>
                    </nav>
                        
                </div>
            </div>
                
        </div>
    </>
  )
}

export default Bar