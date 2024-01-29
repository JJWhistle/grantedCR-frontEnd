import Partnership from "../assets/icons/Partnership"
import Service from "../assets/icons/Service"
import Local from "../assets/icons/local"

const Trust = () => {
  return (
    <>
        <div className="trust">
            <div className="trust__container">
                <div className="trust__wrapper">
                    <div className="trust__flex">
                        <div className="trust__reason">
                            <div className="trust__image">
                                <Partnership />
                            </div>
                            <h3 className="trust__heading">Partnerships</h3>
                            <p className="trust__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil a magnam officia. Eligendi, possimus.</p>
                        </div>

                        <div className="trust__reason">
                            <div className="trust__image">
                                <Service />
                            </div>
                            <h3 className="trust__heading">Excellent Service</h3>
                            <p className="trust__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil a magnam officia. Eligendi, possimus.</p>
                        </div>

                        <div className="trust__reason">
                            <div className="trust__image">
                                <Local />
                            </div>
                            <h3 className="trust__heading">Local Company</h3>
                            <p className="trust__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nihil a magnam officia. Eligendi, possimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trust