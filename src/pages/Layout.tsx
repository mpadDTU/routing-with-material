import { Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/MyNavbar";
const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  };
  
export default Layout;