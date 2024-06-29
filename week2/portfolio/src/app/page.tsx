"use client"
import Image from 'next/image'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Triangle } from 'react-loader-spinner';
export default function Home() {
  let iconRef=useRef<HTMLSpanElement | null>(null);
  let parentcontainer=useRef<HTMLDivElement | null>(null);
  let loadingcontainer=useRef<HTMLDivElement | null>(null);
  
  //selector to select elements 
  let educationbannercontainer=useRef<HTMLDivElement | null>(null);
  let skillsbannercontainer=useRef<HTMLDivElement | null>(null);
  let contactbannercontainer=useRef<HTMLDivElement | null >(null);

  //state to display sections
  let [services,setServices]=useState(true);
  let [education,setEducation]=useState<boolean>(false);
  let [skills,setSkills]=useState<boolean>(false);
  let [contact,setContact]=useState<boolean>(false);


  let wavy=false;
  let EXECUTION_PARAMETER=0
  let POSITION_ARRAY=["top","bottom","left","right"]
  var STAR_COUNT=0;
  var ANIMATION_ID:number;

  interface position_object_type{
    position:String,
    node:HTMLElement
  }
  let POSITION_NODE_ARRAY:Array<position_object_type>=[]


  function getRandomNumber() {
    return Math.floor(Math.random() * 101);
  }




 

  useEffect(()=>{



    let element=iconRef.current
    let iconelements=document.querySelectorAll(".nav-icons") ?? []

    if(element){
      element.onmouseover=()=>{
        iconelements.forEach((node)=>{

          node.classList.remove("hiddenelement")
          node.classList.add("visible")
          // setTimeout(()=>{
          //   node.classList.add("alter-position")

          // },2000)
        })
      }
      element.onmouseout=()=>{
        iconelements.forEach((node)=>{
          node.classList.remove("alter-position")

          node.classList.remove("visible")
          node.classList.add("hiddenelement")
        })
      }

    
    }

    //star dust code
    function move(){
      if(STAR_COUNT<100){
        let stardust=document.createElement("div")
        stardust.className="stardust"  
        //here get top botom left and right random numbers and assign it while creating
        let top=getRandomNumber()
        let bottom=getRandomNumber()
        let right=getRandomNumber()
        let left=getRandomNumber()

        stardust.style.top=top.toString()+"vh";
        stardust.style.bottom=bottom.toString()+"vh";
        stardust.style.left=left.toString()+"vw";
        stardust.style.right=right.toString()+"vw";


        let parentcontainer=document.querySelector(".parentcontainer")
        parentcontainer?.appendChild(stardust)
        STAR_COUNT++;
      }
      else{
        // setTimeout(()=>{
        //   console.log("hit")
        //   setLoading(false)
        // },2000)
        // cancelAnimationFrame(ANIMATION_ID)
        // console.log("cancelled")
        // dont forget to add logic to cancel the animation
        let stardustarray=document.querySelectorAll<HTMLElement>(".stardust")


        //assigning object with node and position
        if(EXECUTION_PARAMETER===0){
          stardustarray.forEach((node)=>{
            let decider_parameter=Math.floor(Math.random()*4)
            let position=POSITION_ARRAY[decider_parameter];
            let position_object:position_object_type={
              position:position,
              node:node
            }
            POSITION_NODE_ARRAY.push(position_object)
          })
          EXECUTION_PARAMETER++
        }


        POSITION_NODE_ARRAY.forEach((node)=>{
          //remove the px and just increment it by one to get necessary animation
          let decision_parameter=Math.floor(Math.random()*4)
          let mover_decider=POSITION_ARRAY[decision_parameter];

          if (node.position == "top") {
            let top = parseInt(window.getComputedStyle(node.node).top);
            top=(top>1200) ? 0 : top 
            top++;
            node.node.style.top = top + "px";
        } else if (node.position == "bottom") {
            let top = parseInt(window.getComputedStyle(node.node).top);
            top=(top>1200) ? 0 : top 

            top--;
            node.node.style.top = top + "px";
        } else if (node.position == "left") {
            let left = parseInt(window.getComputedStyle(node.node).left);
            left=(left>1200)? 0 :left
            left++;
            node.node.style.left = left + "px";
        } else if (node.position == "right") {
            let left = parseInt(window.getComputedStyle(node.node).left);
            left=(left>1200)? 0 :left

            left--;
            node.node.style.left = left + "px";
        }

          // setInterval(()=>{
          // if(mover_decider==="top"){
          //   let top=parseInt(window.getComputedStyle(node.node).top)
          //   top++
          //   node.node.style.top=top.toString()+"px"
          // }else if(mover_decider=="bottom"){
          //   let bottom=parseInt(window.getComputedStyle(node.node).bottom)
          //   bottom++
          //   node.node.style.bottom=bottom.toString()+"px"

          // }
          // else if(mover_decider=="left"){
          //   let left=parseInt(window.getComputedStyle(node.node).left)
          //   left++
          //   node.node.style.bottom=left.toString()+"px"
            
          // }
          // else if(mover_decider=="right"){
          //   let right=parseInt(window.getComputedStyle(node.node).right)
          //   right++
          //   node.node.style.bottom=right.toString()+"px"

          // }
          // },3000)

        })
      } 
      ANIMATION_ID=requestAnimationFrame(move)

    }
    requestAnimationFrame(move)
    // loading logic
    setTimeout(()=>{
      if(parentcontainer.current && loadingcontainer.current ){
        parentcontainer.current.style.visibility="visible"
        loadingcontainer.current.style.display="none"
      }
    },1500)

  },[])

  function navigationHandler(section:String){

    console.log("clicked")
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class to start the animation
          (entry.target as HTMLElement).style.width = '0px';
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of element is visible thi
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);


    if(section==="education"){
      setEducation(true)
      setServices(false)
      setContact(false)
      setSkills(false)
      //hacky code
      setTimeout(()=>{
        let banner=educationbannercontainer.current
        if(banner) observer.observe(banner)         

      },250)
    }
    else if(section==="skills"){
      setSkills(true)
      setServices(false)
      setContact(false)
      setEducation(false)
      setTimeout(()=>{
        let skillbanner=skillsbannercontainer.current
        if(skillbanner) observer.observe(skillbanner)

      },250)
    }else if(section==="contact"){
      setContact(true)
      setServices(false)
      setEducation(false)
      setSkills(false)
      setTimeout(()=>{
        let contactbanner=contactbannercontainer.current
        if(contactbanner) observer.observe(contactbanner)

      },250)
    }
    else if(section === "services"){
      setServices(true)
      setContact(false)
      setEducation(false)
      setSkills(false)
      
    }
  }
  
  
  return (
    <>

      <div ref={loadingcontainer} className='loadingcontainer w-full min-h-max flex items-center justify-center'>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="black"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
      <>
          <div ref={parentcontainer} className="flex min-h-screen flex-col items-center justify-start parentcontainer">
          <div className='mob-nav-container flex items-center justify-center bg-black w-full h-20 text-white'>
    
            <div className='flex items-start justify-end w-full text-white font-bold mr-5'><p>Portfolio.</p></div>
    
          </div>
    
          <div className=' bg-black  image-container'>
          </div>
    
          <div className='flex w-full justify-center'>
            <p className=' font-bold mt-5 text-xl '>MUHAMMED SIRAJUDEEN.</p>
          </div>
    
          <div className=' text-xs w-full flex justify-center '><p className=' w-72' >An avid  <span className='font-bold'>Full Stack Web and Mobile Developer</span> who is interested in crafting <span className='font-bold'>scalable applications</span> </p> </div>
    
          <div className='bottom-tab-container lg:hidden'>
            <nav className='flex items-center justify-center w-full h-full'>
            <span ref={iconRef} className="material-symbols-outlined options black ">
            drag_indicator
            </span>
            </nav>
          </div>
          {/* here we switch the item  */}
          <div className='flex justify-center items-center mt-5'>

              {/* give overflow to this container */}
              {services ?
                    <div className=' flex items-center flex-col justify-center information-container'>
                    <div className= 'text-center' >
                      <p className='font-bold text-xl ' >SERVICES</p>
    
                    </div>
                    <div className='banner bg-black' ref={educationbannercontainer} ></div>
    
                    <div className=' shadow-lg flex flex-col items-center justify-center w-60 '>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >school</span>  
                        <p className='text-sm font-bold' >Bsc. Computer Science</p>              
                      </div>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                        <p className='text-sm font-bold' >Calicut University</p>              
                      </div>             
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                        <p className='text-sm font-bold' >Calicut</p>              
                      </div> 
                    </div>      
                    <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5 '>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >school</span>  
                        <p className='text-sm font-bold' >12th Grade</p>              
                      </div>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                        <p className='text-sm font-bold' >St Dominics Convent School</p>              
                      </div>             
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                        <p className='text-sm font-bold' >Sreekrishnapuram</p>              
                      </div> 
                    </div>
                    <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5 '>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >school</span>  
                        <p className='text-sm font-bold' >10th Grade</p>              
                      </div>
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                        <p className='text-sm font-bold' >St Dominics Convent School</p>              
                      </div>             
                      <div className='text-sm flex items-center justify-start w-full'>
                        <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                        <p className='text-sm font-bold' >Sreekrishnapuram</p>              
                      </div> 
                    </div>
    
                    
            </div>
             
                        :
                    <></>               
              }
              {education ? 
                    <div className=' flex items-center flex-col justify-center information-container'>
                            <div className= 'text-center' >
                              <p className='font-bold text-xl ' >EDUCATION</p>
            
                            </div>
                            <div className='banner bg-black' ref={educationbannercontainer} ></div>
            
                            <div className=' shadow-lg flex flex-col items-center justify-center w-60 '>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >school</span>  
                                <p className='text-sm font-bold' >Bsc. Computer Science</p>              
                              </div>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                                <p className='text-sm font-bold' >Calicut University</p>              
                              </div>             
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                                <p className='text-sm font-bold' >Calicut</p>              
                              </div> 
                            </div>      
                            <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5 '>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >school</span>  
                                <p className='text-sm font-bold' >12th Grade</p>              
                              </div>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                                <p className='text-sm font-bold' >St Dominics Convent School</p>              
                              </div>             
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                                <p className='text-sm font-bold' >Sreekrishnapuram</p>              
                              </div> 
                            </div>
                            <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5 '>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >school</span>  
                                <p className='text-sm font-bold' >10th Grade</p>              
                              </div>
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >apartment</span>                  
                                <p className='text-sm font-bold' >St Dominics Convent School</p>              
                              </div>             
                              <div className='text-sm flex items-center justify-start w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >location_on</span>                  
                                <p className='text-sm font-bold' >Sreekrishnapuram</p>              
                              </div> 
                            </div>
            
                            
                    </div>
                    :
                    <></>
              }
              {skills ?
                    <div className=' flex items-center flex-col justify-start information-container mt-3'>
                      <div className= 'text-center m-0 ' >
                        <p className='font-bold text-lg mt-3 ' >SKILLS & HOBBIES</p>
                      </div>
                      <div className='banner bg-black' ref={skillsbannercontainer} ></div>
      
                      <div className=' shadow-lg flex flex-col items-center justify-start w-60 '>
                        <div className='text-sm flex items-center justify-start w-full'>
                          <div className='flex flex-col items-start justify-center w-full mt-3'>
                            <div className='flex justify-between w-full'>
                              <span className='font font-bold text-sm'>JS</span>
                              <span className='font text-sm font-light'>90%</span>
                            </div>
                            <meter className='h-5 w-full' max={100} min={0} value={90} color='black '></meter>
                          </div>

                          </div>
                          <div className='flex flex-col items-start justify-center w-full mt-3'>
                              <div className='flex justify-between w-full'>
                                <span className='font font-bold text-sm'>PYTHON</span>
                                <span className='font text-sm font-light'>95%</span>
                              </div>
                              <meter className='h-5 w-full' max={100} min={0} value={95} color='black '></meter>
                          </div>
                        <div className='flex flex-col items-start justify-center w-full'>
                            <div className='flex justify-between w-full'>
                              <span className='font font-bold text-sm'>MERN</span>
                              <span className='font text-sm font-light'>95%</span>
                            </div>
                            <meter className='h-5 w-full' max={100} min={0} value={95} color='black'></meter>
                        </div>
                        <div className='flex flex-col items-start justify-center w-full mt-3'>
                            <div className='flex justify-between w-full'>
                              <span className='font font-bold text-sm'>DJANGO</span>
                              <span className='font text-sm font-light'>65%</span>
                            </div>
                            <meter className='h-5 w-full' max={100} min={0} value={65} color='black'></meter>
                        </div>
                        <div className='flex flex-col items-start justify-center w-full mt-3'>
                            <div className='flex justify-between w-full'>
                              <span className='font font-bold text-sm'>REACT NATIVE</span>
                              <span className='font text-sm font-light'>75%</span>
                            </div>
                            <meter className='h-5 w-full' max={100} min={0} value={75} color='black'></meter>
                        </div>


                      </div>   
                      {/* give details about hobbies here  */}
                    </div>
                    :
                <></> 

              }
              {contact ? 
                    <div className=' flex items-center flex-col justify-start information-container mt-3'>
                    <div className= 'text-center m-0 ' >
                      <p className='font-bold text-xl mt-3 ' >CONTACT ME</p>
                    </div>
                    <div className='banner bg-black' ref={contactbannercontainer}></div>
    
                    <div className=' shadow-lg flex flex-col items-start justify-start w-62 '>
                      <div className='flex items-center justify-start mt-30'>
                        <span className="material-symbols-outlined" id="black-icon" >call</span>
                        <span className='font-bold text-xs'>+917907140006</span>
                      </div>
                      <div className='flex items-center justify-start mt-30'>
                        <span className="material-symbols-outlined" id="black-icon" >mail</span>
                        <span className='font-bold text-xs'>muhammedsirajudeen29@gmail.com</span>
                      </div>
                      <div className='flex items-center justify-start mt-30'>
                        <span className="material-symbols-outlined" id="black-icon" >home</span>
                        <span className='font-bold text-xs'>Paduvil(H) Karimpuzha Palakkad <br/>679513 </span>
                      </div>


                    </div>   
                    {/* give details about hobbies here  */}
                    </div>
                    :

                    <></>
              }

          </div>
        </div>
          <div className='nav-items-container'>
            <div className='flex items-center justify-evenly w-full h-full transition-visibility  '>
              <button onClick={()=> navigationHandler("services") } className="icon3 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >home</button>
              <button onClick={()=> navigationHandler("education") } className="icon1 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >info_i</button>
              <button onClick={()=> navigationHandler("skills")} className="icon2 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "   >favorite</button>
              <button onClick={()=> navigationHandler("contact") } className="icon3 nav-icon bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >person</button>

            </div>
          </div>
        </>
        </>


)
}
