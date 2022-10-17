import { useState } from "react";


const Banner = ({html}) => {
  const[show,setShow]=useState(true)
  if(show){
    let main=document.getElementById('root');
    let  div=document.createElement('div');
    div.innerHTML=`${html}`
    main.appendChild(div)
   setShow(false)
    return main
  }
        
    
}

export default Banner