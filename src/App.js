import { Fragment } from "react";
import About from "./components/about/About";
import Accounts from "./components/accounts/Accounts";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Secured from "./components/secured/Secured";
import Views from "./components/views/Views";

function App() {
  ;
  return (
    <Fragment>
      <Navbar/>
      <Main/>
     <Secured/>
     <Views/>
     <Accounts/>
     <About/>
      
    </Fragment>
  );
}

export default App;
