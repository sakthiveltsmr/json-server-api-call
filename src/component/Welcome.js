import { useState } from 'react'
import { popups } from '../common'

const Welcome = ({html}) => {
    const[show,setShow]=useState(true)
  
    const entrypopups=()=>{

        document.addEventListener('mouseenter',()=>{
            console.log("mouse enter")
            if(show){
                setShow(false)  
                return popups(html)
        }
    },true)
}
                // let main=document.getElementById('root');
                // let  div=document.createElement('div');
                // div.innerHTML=`${html}`
                // main.appendChild(div)
                
                // const close= document.getElementById('wclose')
                
                // //on click event for close the popups
                // close.addEventListener("click",()=>{
                //     return div.style.display='none'
                // })  
               
            
   

  
  return(
    <div>{entrypopups()}</div>
  )
}

export default Welcome