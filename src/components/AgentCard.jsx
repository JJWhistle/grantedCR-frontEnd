import { useEffect, useState } from "react";

import Spiner from "./Spiner";

const AgentCard = ({loadingAgent, agent, property, loadingProperty}) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const setData = () => {
            setFormData({message: `Hi! I'm interested in Listing: ${property.title} for $${property.price}`})
        }

        setData();

    }, [loadingProperty])
    

    const handleInputChange = e => {
        const element = e.target;

        setFormData({
            ... formData,
            [element.name]: element.value
        })
    }

    const handleContact = (e) => {
        e.preventDefault();

        console.log(formData);
    }
  return (
    <>
    <div className="card">
        {loadingAgent ? <Spiner /> :
        <>
        <h2 className="card__heading">Contact Agent</h2>
        <img src={agent.profilePictureUrl[0]} className="card__image" alt="Profile Picture" />
        <p className="card__name">{`${agent.name} ${agent.lastName}`}</p>
        <p className="card__label">Email: <span className="card__span">{agent.email}</span></p>
        {agent.phone && <p className="card__label">Phone: <span className="card__span">{agent.phone}</span></p>}
    
    
        <form className="form" onSubmit={handleContact}>
                <div className="form__field">
                    <input id="name" name="name" required type="text" className="form__input" placeholder="Name" onChange={handleInputChange} />
                </div>
    
                <div className="form__field">
                    <input id="email" name="email" required type="email" className="form__input" placeholder="Email" onChange={handleInputChange} />
                </div>
    
                <div className="form__field">
                    <input id="phone" name="phone" required type="tel" className="form__input" placeholder="Phone Number" onChange={handleInputChange} />
                </div>
    
                <div className="form__field">
                    <textarea required name="message" id="message" rows="10" className="form__input" value={formData.message} onChange={handleInputChange}></textarea>
                </div>
    
            <input type="submit" className="form__submit" value={`Contact ${agent.name}!`} />
        </form>

        </>}
    
</div>
    </>
  )
}

export default AgentCard;