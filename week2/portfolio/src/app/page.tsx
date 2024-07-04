"use client"
import Image from 'next/image'
import { FormEvent, FormEventHandler, Suspense, useEffect, useRef, useState } from 'react'
import { Triangle } from 'react-loader-spinner';
import validator from '@/helper/validator';

//importing images
import GithubImage from "../../public/github.png"
import LinkedIn from "../../public/linkedin.png"
import Instagram from "../../public/instagram.png"
import Siraj from "../../public/siraj1.jpeg"

import axios from 'axios';
export default function Home() {
  let iconRef=useRef<HTMLSpanElement | null>(null);
  let parentcontainer=useRef<HTMLDivElement | null>(null);
  let loadingcontainer=useRef<HTMLDivElement | null>(null);
  
  //selector to select elements 
  let educationbannercontainer=useRef<HTMLDivElement | null>(null);
  let skillsbannercontainer=useRef<HTMLDivElement | null>(null);
  let contactbannercontainer=useRef<HTMLDivElement | null >(null);
  let observercontainer=useRef<HTMLDivElement | null >(null);
  let navparent=useRef<HTMLDivElement | null >(null);
  let backcontainer=useRef<HTMLDivElement | null >(null);
  let formcontainer=useRef<HTMLFormElement | null >(null);

  //individuls alert
  let [namealert,setNamealert]=useState<string>("")
  let [emailalert,setEmailalert]=useState<string>("")
  let [numberalert,setNumberalert]=useState<string>("")
  let [descriptionalert,setDescriptionalert]=useState<string>("")
  let [buttonstate,setButtonstate]=useState<boolean>(false)
  let [responseloader,setResponseloader]=useState<boolean>(false)
  
  //buttonstate


  //state to display sections
  let [services,setServices]=useState(false);
  let [education,setEducation]=useState<boolean>(false);
  let [skills,setSkills]=useState<boolean>(false);
  let [contact,setContact]=useState<boolean>(false);
  let [enquiry,setEnquiry]=useState(true);
  let [form,setForm]=useState(false)
  let [projects,SetProjects]=useState(false);

  //use state for forms
  let [name,setName]=useState<string>("")
  let [email,setEmail]=useState<string>("")
  let [number,setNumber]=useState<string>("")
  let [description,setDescription]=useState<string>("")

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
    let navigationparent=navparent.current
    
    if(element){
      element.onmouseover=()=>{


        iconelements.forEach((node)=>{

          node.classList.remove("hiddenelement")
          node.classList.add("visible")
        })
        navigationparent?.classList.remove("container-none")
        navigationparent?.classList.add("container-visible")
      }
      element.onmouseout=()=>{

        iconelements.forEach((node)=>{
          node.classList.remove("alter-position")

          node.classList.remove("visible")
          node.classList.add("hiddenelement")
        })
        setTimeout(()=>{
          navigationparent?.classList.remove("container-visible")

          navigationparent?.classList.add("container-none")
        },200)

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
            top=(top>1000) ? 0 : top 
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
        if(backcontainer.current){
          backcontainer.current.style.visibility="visible"
        }
      }
    },1500)

  },[])

  function navigationHandler(section:String){
    setEnquiry(false)

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add a class to start the animation
          // (entry.target as HTMLElement).style.width = '0px';
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null, // Use the viewport as the rootfpare
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of element is visible thi
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);


    if(section==="education"){
      setEducation(true)
      setServices(false)
      setContact(false)
      setSkills(false)
      setForm(false)
      SetProjects(false)

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
      setForm(false)
      SetProjects(false)

      setTimeout(()=>{
        let skillbanner=skillsbannercontainer.current
        if(skillbanner) observer.observe(skillbanner)

      },250)
    }else if(section==="contact"){
      setContact(true)
      setServices(false)
      setEducation(false)
      setSkills(false)
      setForm(false)
      SetProjects(false)

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
      setForm(false)
      SetProjects(false)


      
    }
    else if(section==="projects"){
      SetProjects(true) 
      setServices(false)
      setContact(false)
      setEducation(false)
      setSkills(false)
      setForm(false)
      setEnquiry(false)
    }
  }
  function clickHandler(){
    setForm(true)
    setEnquiry(false)
  }
  async function submissionHandler(event: FormEvent<HTMLFormElement>){
    let formData=new FormData(event.currentTarget)
    //form submission logic here
    event.preventDefault()
    //loading logic


    setButtonstate(true)
    let alertname=validator.nameValidator(name)
    let alertemail=validator.emailValidator(email)
    let alertnumber=validator.numberValidator(number)
    let alertdescription=validator.nameValidator(description)
    setNamealert(alertname)
    setEmailalert(alertemail)
    setNumberalert(alertnumber)
    setDescriptionalert(alertdescription)

    if(alertname.length===0 && alertemail.length===0 && alertnumber.length===0 && alertdescription.length===0 ){
      setResponseloader(true)
      // let formElement=document.querySelector("form") ?? undefined
      // const nameInput = (formElement?.querySelector("input[name='name']") as HTMLInputElement).value;
      // const emailInput=(formElement?.querySelector("input[name= 'email']") as HTMLInputElement).value;
      // const numberInput=(formElement?.querySelector("input[name='number' ]") as HTMLInputElement).value;
      // const descriptionInput=(formElement?.querySelector("textarea[name='description' ]") as HTMLInputElement).value;
      // console.log(nameInput,emailInput,numberInput,descriptionInput)
      // var formData = new FormData();
      // formData.append("name",nameInput)
      // formData.append("email",emailInput)
      // formData.append("number",numberInput)
      // formData.append("description",descriptionInput)

      

      try {
          // Fetch API POST request
          const response = await fetch("https://script.google.com/macros/s/AKfycbyuOqF_cCeBHeZPAB9WxlF-4ZJPb7os7FAHEz46-Yn5dXVXFhe9tq60U3bSNj6tzJ8AyQ/exec", {
              method: "POST",
              body: formData,
        // mode:"no-cors"
        
          });

          
          if (response.ok) {
              alert("Form submitted successfully");
              // window.location.reload();
              // You can redirect to another page using:
              // window.location.href = "https://google.com";
              setName("")
              setNumber("")
              setDescription("")
              setEmail("")
          } else {
              throw new Error("Network response was not ok");
          }
          setButtonstate(false)

      } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong");
      }
      setResponseloader(false)

    }else{
      setButtonstate(false)
    }
    
  }
  function closeHandler(){
    setEnquiry(true)
    setForm(false)
  }
  function formnavHandler(){
    setEnquiry(true)
    setSkills(false)
    setContact(false)
    setEducation(false)
    setServices(false)
    setForm(false)
    SetProjects(false)


  }
  


  
  
  return (
    <>
    {responseloader ?
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
   
      :
      <></>

    }

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
        <div ref={parentcontainer} className="flex min-h-screen flex-col items-center justify-start parentcontainer overflow-x-hidden overflow-y-hidden ">
        <div className={` ${responseloader ? "visibility-hidden" : " " } mob-nav-container flex items-center justify-between bg-black w-full h-20 text-white`}>
          <div className='flex items-center justify-start w-full font-bold text-sm  laptop-container'>
            <a onClick={()=> navigationHandler("services")} href='#'  className=' text-white m-5 '>Home.</a>
            <a onClick={()=> navigationHandler("education")} href='#' className=' text-white m-5 '>Education.</a>
            <a onClick={()=> navigationHandler("skills")} href='#' className=' text-white m-5 '>Skills.</a>
            <a onClick={()=> navigationHandler("contact")} href='#' className=' text-white m-5 '>Contact.</a>
            <a onClick={()=> navigationHandler("projects")} href='#' className=' text-white m-5 '>Projects.</a>




          </div>
          <span className='flex items-start justify-end  text-white font-bold m-5'><p>Portfolio.</p></span>
  
        </div>
  
        <div className=' bg-black  image-container flex items-center justify-center '>
          <Image src={Siraj} alt='profile-image' height={100} width={100} id='image-container-first' unoptimized /> 
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
            {
              enquiry ? 
              <div className='flex flex-col items-center justify-center mt-40  w-max ' ref={observercontainer} onClick={clickHandler}  >
                <span className="material-symbols-outlined transformer" id='animation-icon' >keyboard_double_arrow_down</span>  
                <p className='font font-bold text-sm mt-10' id='text-margin'  >ENQUIRE NOW</p>
              </div>
              :
              <></>
            }
            {
              form ? 
              <div className='flex flex-col items-center justify-center shadow-xl mt-0 p-5 mb-10 scrollable-container' id='extra-height' >
                  <div className='flex items-center justify-between mt-32' id='less-margin' >
                    <p className='font font-bold text-sm m-5' >ENQUIRE NOW</p>
                    <button onClick={closeHandler} className='bg-black flex items-center justify-center rounded-xl'>
                    <span className="material-symbols-outlined">close</span>  

                    </button>
                  </div>                    
                  {/* <label htmlFor="name" className='font-bold text-sm p-0 m-' >Name</label> */}
                  <form onSubmit={submissionHandler} method='POST' ref={formcontainer}  >
                  <input type='text' value={name} onChange={(e)=>setName(e.target.value)} name='name'  id='name' className=' border border-black w-72 mt-5 placeholder:text-gray-600 placeholder:text-xs placeholder:p-3 '  placeholder='Full Name' />
                  <div className=' text-red-700 text-xs p-0 m-0'> {namealert} </div>
                  <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email'  id='name' className=' border border-black w-72 mt-5 placeholder:text-gray-600 placeholder:text-xs placeholder:p-3' placeholder='Email Address' />
                  <div className=' text-red-700 text-xs p-0 m-0'> {emailalert} </div>
                  <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} name='number'  className=' border border-black w-72 mt-5 placeholder:text-gray-600 placeholder:text-xs placeholder:p-3' placeholder='Mobile Number' />
                  <div className=' text-red-700 text-xs p-0 m-0'> {numberalert} </div>
                  <textarea id='description' value={description} onChange={(e)=>setDescription(e.target.value)}  name='description' className=' border border-black w-72 mt-5 placeholder:text-gray-600 placeholder:text-xs placeholder:p-3' placeholder='Description of the requirements of the work' />
                  <div className=' text-red-700 text-xs p-0 m-0'> {descriptionalert}</div>
                  <button  disabled={buttonstate} type='submit' value='submit'  className={` ${buttonstate ? "disabled-button" : ""} bg-black border-hidden text-white flex items-center justify-center ml-52d mt-5  rounded-full h-10 w-auto p-5 mb-10`}>
                    <span className="material-symbols-outlined" id='light-icon'   >send</span>  
                  </button>

                  </form>

              </div> 
                :
                <></>
            }
            {services ?

                  <div className=' flex items-center flex-col justify-center information-container'>
                  <div className= 'text-center' >
                    <p className='font-bold text-xl top-text ' id='margin-top'  >SERVICES</p>
  
                  </div>
                  <div className='banner bg-black h-20' ref={educationbannercontainer} ></div>
                  <div className='flex flex-col items-center justify-center container-row'>
                  <div className=' shadow-lg  lg:mt-10 flex flex-col items-center justify-center w-60 p-3 '>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>  
                      <p className='text-sm font-bold' >Web Development</p>              
                    </div>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >info</span>                  
                      <p className='text-xs font-bold' >Efficient Eye Catching Websites</p>              
                    </div>              
                  </div>  
                  <div className=' shadow-lg lg:mt-10 flex flex-col items-center justify-center w-60 p-3 '>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>  
                      <p className='text-sm font-bold' >App Development</p>              
                    </div>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >info</span>                  
                      <p className='text-xs font-bold' >Craft Beautiful and Elegant Mobile Applications</p>              
                    </div>              
                  </div>   
                  <div className=' shadow-lg lg:mt-10 flex flex-col items-center justify-center w-60 p-3 margin-bottom'>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>  
                      <p className='text-sm font-bold' >Backend Development</p>              
                    </div>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >info</span>                  
                      <p className='text-xs font-bold' >Craft Efficient and Scalable Backend Applications</p>              
                    </div>              
                  </div>  
                  </div>
  
                  {/* <div className=' shadow-lg flex flex-col items-center justify-center w-60 p-3 '>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>  
                      <p className='text-sm font-bold' >Scalable Systems</p>              
                    </div>
                    <div className='text-sm flex items-center justify-start w-full'>
                      <span className="material-symbols-outlined" id="black-icon" >info</span>                  
                      <p className='text-xs font-bold' >Diagnosing and solving Issues of scalability
                      </p>              
                    </div>              
                  </div>   */}
  
                  
          </div>
           
                      :
                  <></>               
            }
            {education ? 
                  <div className=' flex items-center flex-col justify-center information-container'>
                          <div className= 'text-center' >
                            <p className='font-bold text-xl top-text' id='margin-top' >EDUCATION</p>
          
                          </div>
                          <div className='banner bg-black' ref={educationbannercontainer} ></div>
          
                          <div className='flex flex-col items-center justify-center container-row ' >
                          <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5'>
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
                          <div className=' shadow-lg flex flex-col items-center justify-center w-60 mt-5 margin-bottom '>
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
                  </div>
                  :
                  <></>
            }
            {skills ?
                  <div className=' flex items-center flex-col justify-start information-container mt-3'>
                    <div className='lg:flex lg:items-start lg:justify-start '>
                    <div className='flex flex-col lg:items-start lg:justify-start'>
                      <div className= 'text-center m-0 ' >
                        <p className='font-bold text-lg  ' id='skill-margin  '  >SKILLS</p>
                      </div>
                      <div className='banner bg-black' ref={skillsbannercontainer} ></div>
                      <div className=' shadow-lg flex flex-col items-center justify-start w-60  '>
                        <div className='text-sm flex items-center justify-start w-full mt-3'>
                          <div className='flex flex-col items-start justify-center w-full '>
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
                    </div>

                    
                    {/* give details about hobbies here  */}

                    <div className='flex flex-col lg:ml-20 lg:items-start lg:justify-start '>
                      <div className= 'text-center m-0 ' >
                      <p className='font-bold text-lg ' id='margin-top-mobile'   >HOBBIES</p>
                      </div>
                      <div className='banner bg-black' ref={skillsbannercontainer} ></div>
      
                      <div className=' shadow-lg flex flex-col items-center justify-start w-60  '>
                        <div className='text-sm flex items-center justify-start w-full'>
                          <div className='flex flex-col items-start justify-center w-full mt-3'>
                            <div className='flex justify-start items-center w-full'>
                              <span className="material-symbols-outlined" id="black-icon" >book_4</span>                  
                              <span className='font font-bold text-sm'>Reading</span>
                            </div>
                          </div>

                          </div>
                          <div className='flex flex-col items-start justify-center w-full mt-3'>
                            <div className='flex justify-start items-center w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >two_wheeler</span>                  
                                <span className='font font-bold text-sm'>Riding</span>
                            </div>
                          </div>
                        <div className='flex flex-col items-start justify-center w-full mb-5 margin-bottom-extra '>
                            <div className='flex justify-start items-center w-full'>
                                <span className="material-symbols-outlined" id="black-icon" >hiking</span>                  
                                <span className='font font-bold text-sm'>Hiking</span>
                            </div>
                        </div>




                      </div>
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
                    <p className='font-bold text-xl mt-3' >CONTACT ME</p>
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

                  <div className='flex items-center justify-evenly mt-10 w-full' >
                    <a href='https://github.com/muhammedsirajudeen' className='bg-black h-10 w-10 p-2 rounded-full'  ><Image src={GithubImage} className='social-icon' alt='github'    /></a>  
                    <a href='https://in.linkedin.com/in/muhammed-sirajudeen-10a679217' className='bg-black h-10 w-10 p-2 rounded-full'  ><Image src={LinkedIn} className='social-icon' alt='linkedin'    /></a>  
                    <a href='https://www.instagram.com/siraju__sj?igsh=MTY3NDNnazI3d2JzdA==' className='bg-black h-10 w-10 p-2 rounded-full'  ><Image src={Instagram} className='social-icon' alt='instagram'    /></a>  
                  </div> 
                  {/* give details about hobbies here  */}
                  </div>
                  :

                  <></>
            }
            {
              projects ? 
                <div className='flex flex-col justify-center items-center'>
                  <h1 className=' font-bold'>PROJECTS</h1>
                  <div className=' shadow-lg flex flex-col items-start justify-center p-3'>
                    <p className='font font-bold text-xs mt-5' >OPEN SOURCE LEARNING PLATFORM</p>
                    <div className='flex items-center justify-center'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>
                      <pre className='text-xs'>
                        NEXTJS,EXPRESS,AWS,DOCKER
                      </pre>

                    </div>
                    <div className='flex items-center justify-center'>
                      <span className="material-symbols-outlined" id="black-icon" >code</span>
                      <pre className='text-xs'>
                        Has features ranging from Live Streaming and<br/> 
                        chatting with mentors to uploading <br/>
                        pre-recorded videos                         
                      </pre>

                    </div>
                    <a href='https://github.com/muhammedsirajudeen/gtasandshorehackathon.git' className='bg-black h-10 w-10 p-2 rounded-full m-auto mt-5'  ><Image src={GithubImage} className='social-icon' alt='github'    /></a>  

                   
                    {/* <Image src={} */}
                  </div>

                </div>
              :
              <></>
            }

        </div>
      </div>
        <div className={` ${responseloader ? "visibility-hidden" : " " } w-full absolute top-32 left-0 back-container `} ref={backcontainer} >
          <div className='flex items-center justify-end w-full'>
            <span className={`${responseloader ? "visibility-hidden" : " " } bg-black flex items-center justify-center mr-10 p-2 rounded-full`}>
              <span className="material-symbols-outlined" onClick={formnavHandler} >question_mark</span>
            </span>
          </div>
        </div>
        <div className='nav-items-container container-none nav-parent' ref={navparent}>
          <div className='flex items-center justify-evenly w-full h-full  '  >
            <button onClick={()=> navigationHandler("services") } className="icon3 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >home</button>
            <button onClick={()=> navigationHandler("education") } className="icon1 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >info_i</button>
            <button onClick={()=> navigationHandler("skills")} className="icon2 nav-icon  bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "   >favorite</button>
            <button onClick={()=> navigationHandler("contact") } className="icon3 nav-icon bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >person</button>
            <button onClick={()=> navigationHandler("projects") } className="icon3 nav-icon bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >trophy</button>

          </div>
        </div>

      </>
      

  </>


)
}
