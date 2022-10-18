// import useStore from "../store";
import { useState } from "react";
// import Structure from "./structure";
import { CustomFnForPopUp } from "../PopupsManager";

const Exitpopups = ({html}) => {
 const[show,setShow]=useState(false)

    document.addEventListener("mouseout",(e)=>{
        if(e.clientY<=0){
            console.log(e.clientY)
          return setShow(true)
        }
    },false)
    return(
        // <>{show?<div>{CustomFnForPopUp.onExistIntent(html)}</div>:null}</>
        <></>
    )
 
}

export default Exitpopups