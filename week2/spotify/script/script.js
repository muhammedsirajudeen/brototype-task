let sidenavbutton=document.querySelector(".sidenav-button")
let sidebarcontainer=document.querySelector(".sidebar-container")
let sidebarflex=document.querySelector(".sidebar-flex")
let clicked=false
function opener(){
    
    console.log("clicked")
    sidebarcontainer.style.width="100vw"
    sidebarflex.style.display="flex"
}
sidenavbutton.onclick=()=>{
    opener()
}

function closer(){
    sidebarcontainer.style.width="0vw"
    sidebarflex.style.display="none"
}
let sidenavbuttonclose=document.querySelector(".sidenav-button-close")
sidenavbuttonclose.onclick=()=>{
    closer()

}

//make it toggling class

let anchor=document.querySelectorAll("a")
anchor.forEach((element)=>{
        element.addEventListener("click",()=>{
            closer()
        })
})
