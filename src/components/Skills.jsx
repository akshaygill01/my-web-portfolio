import React from 'react'
import {motion} from "framer-motion";

import js from "../Assets/javascript.png"
import html from "../Assets/html.png"
import mysql from "../Assets/mysql.png"
import java from "../Assets/java.png"
import react from "../Assets/react.png"
import css from "../Assets/css.png"
import sass from "../Assets/sass.png"


const Skills = () => {

   const animations={

        whileInView:{
          x:0,
          y:0,
          opacity:1,
          transition: {
            duration: 0.9, // Adjust this duration value as needed
          },

        },

        one :{
          opacity:0,
          x:"-100%"

        },
   }



  return (
    <div id='skills'>

           <h2>Skills</h2>
 
           <motion.div className='serviceBox1'
            whileInView={animations.whileInView}
            initial={animations.one}
            >
               <div>
               <img src={java} alt="Java" width="140px" height="140px"/>
               <p>Java</p>
               </div>
               <div>
               <img src={react} alt="React JS" width="140px" height="140px"/>
               <p>React</p>
               </div>
               <div>
               <img src={js} alt="JavaScript" width="140px" height="140px"/>
               <p>JavaScript</p>
               </div>

               <div>
               <img src={css} alt="CSS" width="140px" height="140px"/>
               <p>CSS</p>
               </div>

               <div>
               <img src={sass} alt="SASS" width="140px" height="140px"/>
               <p>SASS</p>
               </div>
               
               <div>
               <img src={html} alt="HTML 5" width="140px" height="140px"/>
               <p>HTML 5</p>
               </div>
               
               <div>
               <img src={mysql} alt="MySql" width="140px" height="140px"/>
               <p>MySql</p>
               </div>
               
            </motion.div>  

    </div>
  )
}

export default Skills