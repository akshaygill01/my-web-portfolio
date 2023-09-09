import React from 'react'

import linkedIn from "../Assets/linkedin.svg";
import phone from "../Assets/phone.svg";
import email from "../Assets/email.svg";
import address from "../Assets/gps.svg";
import homepage from "../Assets/home (1).svg";


import git from "../Assets/github (1).svg";


const Footer = () => {
  return (
      <footer>

         <div className='heading'>

          <h1>Akshay Gill</h1>
           <a href="#home">
           <img src={homepage} alt="Home" height='30px' width='30px' />
           </a>

         </div> 

        <div className='socialmedia'>
             <a href="https://www.linkedin.com/in/akshay-gill-2128771ba/" target='blank'>
                <img src={linkedIn} alt="LinkedIn" height='50px' width='50px' />
             </a>

             <a href="https://github.com/akshaygill01?tab=repositories" target='blank'>
                <img src={git} alt="Github" height='50px' width='50px' />
             </a>
        </div>


        <div className='contacts'>

          <div >
            <img src={phone} alt="" width="25" height="25"/>
            <h4> (+91) - 7302015879</h4>

          </div>


          <div >
            <img src={email} alt="" width="30" height="30"/>
            <h4>gillakshay051@gmail.com</h4>

          </div>

          <div >
            <img src={address} alt="" width="30" height="30"/>
            <h4>Raj Nagar,Ghaziabad (201001),U.P,India</h4>

          </div>

        </div>





 

      </footer>
  )
}

export default Footer