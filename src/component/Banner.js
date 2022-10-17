import { useState } from "react";
import Structure from "./structure";


const Banner = ({html}) => {
  const[show,setShow]=useState(true)
  const ban=()=>{

      if(show){
          // let main=document.getElementById('root');
          // let  div=document.createElement('div');
          // div.innerHTML=`${html}`
          // main.appendChild(div)
          setShow(false)
          return <Structure html={html}/>
        }
  }
        
    return(
        <>{ban()}</>
    )
}

export default Banner