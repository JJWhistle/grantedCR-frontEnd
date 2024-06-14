import Visit from "../sections/Visit";
import Live from "../sections/Live";
import Trust from "../sections/Trust";
import { Helmet } from 'react-helmet';


const Home = () => {

  return (
    <>
      <Helmet>
          <title>Granted Costa Rica</title>
      </Helmet>

      
      <Visit />
      <Live />
      <Trust />
    </>
  )
}

export default Home