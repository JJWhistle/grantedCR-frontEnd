import { Outlet } from "react-router-dom";
import SecundaryHeader from '../components/SecundaryHeader';

const ClientLayout = () => {
  return (
    <>
        <SecundaryHeader />
        <Outlet />
    </>
  )
}

export default ClientLayout