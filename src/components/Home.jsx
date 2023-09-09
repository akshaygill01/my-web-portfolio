import React, { useRef } from 'react'
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../Assets/ak7after reduced.png"
import git from "../Assets/github (1).svg";



const Home = () => {

    const projectCount = useRef(null);

    const animationProjectsCount = () => {
        animate(0, 15, {
          duration: 1,
          onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
      };


    const animations={
        h1:{
            initial:{
                x:"-100%",
                opacity:0,
               },
            whileInView:{
                x:0,
                opacity:1,
            } ,  
            transition: {
              duration: 0.6, // Adjust this duration value as needed
            },
        },
        button:{
            initial:{
                y:"-100%",
                opacity:0,
               },
            whileInView:{
                y:0,
                opacity:1,
            } ,  
        },
    };
  return (
    <div id='home'>
        <section>
          
          <div>
               <motion.h1 {...animations.h1}> 

                 Hi,I Am <br/> Akshay Gill
                 
               </motion.h1>


               <Typewriter 
                 options={{
                    strings:["A developer","A Designer","A Creator"],
                    autoStart:true,
                    loop:true,
                    cursor:"",
                    wrapperClassName:"typeWriterPara",
                    
                 }}
               />


               <div>
                <a href="mailto:gillaskhay051@gmail.com">Hire Me</a>
                <div className='projects'>
                  
                <a href="https://github.com/akshaygill01?tab=repositories" target='blank'>
                <img src={git} alt="Github" height='50px' width='50px' />
                </a>
                <a className='prj' href="#work">Projects <BsArrowUpRight/>
                </a>

                </div>
               
               </div>


              

               <aside>
               <article>
               <p>
                +
               
                 {
                  
                    <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    15
                  </motion.span>
                  
                 }
                
              </p>
                <span>Projects Done</span>
               </article>
               

               <article data-special>
                <p>Contact</p>
                <span>gillaskhay051@gmail.com</span>
               </article>

               </aside>

               
          </div>
            
        </section>





        <section>
            <img src={me} alt="gill" />
            
        </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home