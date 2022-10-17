// import { useState } from "react";
import Structure from "./structure";


const Banner = ({html,show}) => {
//   const[show,setShow]=useState(true)
//   const Ban=()=>{

//       if(show){
//         console.log("bans")
//           // let main=document.getElementById('root');
//           // let  div=document.createElement('div');
//           // div.innerHTML=`${html}`
//           // main.appendChild(div)
//           setShow(false)
//           return <>
         
//           </>
//         }
//   }
        
    return(
        <>
      {show?
       <Structure html={html}/>:null}
        </>
    )
}

export default Banner