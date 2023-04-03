
import { Fragment } from "react";
import About from "./components/about/About";
import Accounts from "./components/accounts/Accounts";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Secured from "./components/secured/Secured";
import Views from "./components/views/Views";
import Apps from "./components/apps/Apps";
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <Fragment>
    
    <Navbar/>
     <Main/>
     <Secured/>
     <Views/>
     <Accounts/>
     <About/>
     <Apps/>
     <Support/>
     <Footer/>

    </Fragment>
  );
}

export default App;
