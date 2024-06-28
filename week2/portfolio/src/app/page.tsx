"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Triangle } from 'react-loader-spinner';
export default function Home() {
  let iconRef=useRef<HTMLSpanElement | null>(null);
  let parentcontainer=useRef<HTMLElement | null>(null);
  let loadingcontainer=useRef<HTMLDivElement | null>(null);

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
          setTimeout(()=>{
            node.classList.add("alter-position")

          },2000)
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
          console.log(node)
          let decision_parameter=Math.floor(Math.random()*4)
          let mover_decider=POSITION_ARRAY[decision_parameter];
          console.log(mover_decider)      

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

    setTimeout(()=>{
      if(parentcontainer.current && loadingcontainer.current ){
        parentcontainer.current.style.visibility="visible"
        loadingcontainer.current.style.display="none"
      }
    },3000)

  },[])
  
  
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
          <main ref={parentcontainer} className="flex min-h-screen flex-col items-center justify-start parentcontainer">
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
        </main>
          <div className='nav-items-container'>
            <div className='flex items-center justify-center w-full h-full transition-visibility  '>
              <span className="nav-icon m-10 bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >info_i</span>
              <span className="nav-icon mt-10 bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "   >favorite</span>
              <span className="nav-icon m-10 bg-black rounded-full shadow-lg  scale-100 material-symbols-outlined nav-icons flex items-center justify-center hiddenelement "  >person</span>
    
            </div>
    
          </div>
        </>
    </>


)
}
