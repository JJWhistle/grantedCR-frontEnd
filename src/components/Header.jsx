import Bar from "./Bar";

const Header = () => {
  return (
  <>
    <header className="header">
      <div className="header__content">
        <Bar />
          <video className="header__background" loop muted autoPlay="autoplay">
            <source src="https://res.cloudinary.com/dwtmwtnpb/video/upload/v1697165305/Header/onkuu1ginl4qi3lph9un.mp4" type="video/mp4" />
          </video>
        
        <div className="header__flex">
          <div className="header__container">
            <div className="header__wrapper">
              <h1 className="header__heading">Grant Access to the Best of Costa Rica</h1>
              <div className="header__services">
                <span className="header__service">Tours</span>
                <span className="header__service">Vacation Rentals</span>
                <span className="header__service">Management</span>
                <span className="header__service">Real Estate</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>

  </>
  )
}

export default Header