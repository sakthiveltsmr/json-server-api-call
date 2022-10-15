import axios from "axios";
import { useEffect } from "react";
import useStore from "../store";
import Eventexecution from "./Eventexecution";
const Exitpopups = () => {
 console.log("entry popups")
  const campain=useStore((state)=>state.campain)
  const sethtml=useStore((state)=>state.sethtml)

  //getting html component according to campaign.types
  const getHtml=async()=>{
    try {
      if(campain){
        const result =await axios.get(`http://localhost:3004/Event/${campain.event}`)
        console.log(result.data)
        sethtml(result.data)
        return Eventexecution()
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
     
     getHtml()
     
  },[campain.event])

    
}

export default Exitpopups