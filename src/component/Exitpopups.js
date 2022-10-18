// import useStore from "../store";
import { useState } from "react";
import Structure from "./structure";

const Exitpopups = ({html}) => {
 const[show,setShow]=useState(false)
 
    document.onmouseout=(event)=>{
        if(event.clientY<=0){
            console.log(event.clientY)
          return setShow(true)
          
        }
    }
    return(
        <>{show?<Structure html={html}/>:null}</>
    )
 
}

export default Exitpopups