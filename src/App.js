import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from 'react';


function App() {
  return(
  <div>
  <HeaderPhone  />
  <Header  />
  <Home />
  <Work/>
  <Timeline/>
  <Skills/>
  <Contacts/>
  <Footer/>
  <Toaster/>
  
  </div>
)
}

export default App;
