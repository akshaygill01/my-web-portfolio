import React, { useState } from 'react'
import vg from "../Assets/vg.png"
import toast  from 'react-hot-toast';
import {addDoc,collection} from "firebase/firestore"

import {db} from "../firebase"

const Contacts = () => {
  //using use state
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[msg,setMsg]=useState("");
  const[disableBtn,setDisableBtn]=useState(false);

//for form

  const submitHandler= async (e)=>{
    e.preventDefault();
    setDisableBtn(true);
    
    //because doc  returns promise
    try {
      await addDoc(collection(db,"contacts"),{name,email,msg,});
      toast.success("your message has been sent!")
      setName("");
      setEmail("");
      setMsg("");
      setDisableBtn(false);
    }
     catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }

    
    
  }


  return (
    <div id='contact'>
      <section>
        <form  onSubmit={submitHandler}>
          
          <h2>
            Contact Me
          </h2>

          <input type="text"
           value={name} 
           onChange={(e)=>setName(e.target.value)}
           placeholder='Your name'
           required


            />



          <input 
          type="email"
           placeholder='Your email' 
           value={email} 
           
           onChange={(e)=>setEmail(e.target.value)} required/>


           
          <input type="text"
           placeholder='Your msg' 
           value={msg}
           onChange={(e)=>setMsg(e.target.value)}
           required/>

          <button className={disableBtn?"disableBtn":""}  disabled={disableBtn}  type='submit'>Send</button>

        </form>
      </section>


      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  )
}

export default Contacts