import { useState } from 'react'

const Welcome = ({html}) => {
    const[show,setShow]=useState(true)
  window.onmouseenter=()=>{
    if(show){
        let main=document.getElementById('root');
        let  div=document.createElement('div');
        div.innerHTML=`${html}`
        main.appendChild(div)
       setShow(false)
       const close= document.getElementById('wclose')

//on click event for close the popups
           close.addEventListener("click",()=>{
             return div.style.display='none'
           })    
        return main
    }

  }
}

export default Welcome