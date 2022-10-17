import axios from "axios";
import { useEffect } from "react";
import useStore from "../store";
import Rules from "./Rules"
// import Eventexecution from "./Eventexecution";
const Fetchpopupshtml = () => {
  
  const campain=useStore((state)=>state.campain)
  const sethtml=useStore((state)=>state.setHtml)
  const html=useStore((state)=>state.html)

  //getting html component according to campaign.types
  const getHtml=async()=>{
    try {
      if(campain){
        const result =await axios.get(`http://localhost:3004/Event/${campain.event}`)
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
   html ? <Rules/>:null
  )
 
  
   
}

export default Fetchpopupshtml