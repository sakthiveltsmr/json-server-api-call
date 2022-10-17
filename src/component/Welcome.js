import { useState } from 'react'

const Welcome = ({html}) => {
    const[show,setShow]=useState(true)
    const entrypopups=()=>{

        document.onmouseenter=()=>{
            console.log("mouse enter")
            if(show){
                let main=document.getElementById('root');
                let  div=document.createElement('div');
                div.innerHTML=`${html}`
                main.appendChild(div)
                
                const close= document.getElementById('wclose')
                
                //on click event for close the popups
                close.addEventListener("click",()=>{
                    return div.style.display='none'
                })  
                setShow(false)  
                return main
            }
    }

  }
  return(
    <div>{entrypopups()}</div>
  )
}

export default Welcome