import Partnership from "../assets/icons/Partnership"
import Service from "../assets/icons/Service"
import Local from "../assets/icons/Local"

const Trust = () => {
  return (
    <>
        <div className="trust">
            <div className="trust__container">
                <div className="trust__wrapper">
                    <div className="trust__grid">
                        <div className="trust__reason">
                            <div className="trust__image">
                                <Partnership />
                            </div>
                            <h3 className="trust__heading">Partnerships</h3>
                            <p className="trust__text">Partnering with Century21 and local tour operators, we offer a hassle-free experience in Costa Rica. Our packages make booking easy, affordable, and fun!</p>
                        </div>

                        <div className="trust__reason">
                            <div className="trust__image">
                                <Service />
                            </div>
                            <h3 className="trust__heading">Excellent Service</h3>
                            <p className="trust__text">Experience the best of Costa Rica with us! Our expert team provides exceptional service, ensuring a seamless and enjoyable trip.</p>
                        </div>

                        <div className="trust__reason">
                            <div className="trust__image">
                                <Local />
                            </div>
                            <h3 className="trust__heading">Local Company</h3>
                            <p className="trust__text">As a local company, we know Costa Rica's secrets. We'll take you off the beaten path, sharing authentic experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trust