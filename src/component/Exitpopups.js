import axios from "axios";
import { useEffect, useState } from "react";
// import useStore from "../store";
import Eventexecution from "./Eventexecution";
const Exitpopups = (campaign) => {
  const[html,sethtml]=useState()
 
  // const campain=useStore((state)=>state.campain)
  // const sethtml=useStore((state)=>state.sethtml)

  //getting html component according to campaign.types
  const getHtml=async()=>{
    try {
      if(campaign){
        const result =await axios.get(`http://localhost:3004/Event/${campaign.event}`)
        console.log(result.data)
        sethtml(result.data)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
     
     getHtml()
     
  },[])

  return(
    <>{Eventexecution(html)}</>
  )
 
  
   
}

export default Exitpopups