// import useStore from "../store";
import { useState } from "react";
import Structure from "./structure";

const Exitpopups = ({html}) => {
 const[show,setShow]=useState(false)
    console.log("in html",html)
    // const campaign=useStore((state)=>state.campain)
    // const setCampain=useStore((state)=>state.setCampain)
   
    document.onmouseout=(event)=>{
        if(event.clientY<=0){
            console.log(event.clientY)
          return setShow(true)
            //    setCampain({...campaign,active:false})
//                let main=document.getElementById('root');
//                let  div=document.createElement('div');
//                div.innerHTML=`${html}`
//                main.appendChild(div)
//            const close= document.getElementById('close')

// //on click event for close the popups
//            close.addEventListener("click",()=>{
//              return div.style.display='none'
//            })    
//                return main
//             }

        }
    }
    return(
        <>{show?<Structure html={html}/>:null}</>
    )
 
}

export default Exitpopups