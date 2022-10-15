import axios from "axios";
import { useEffect } from "react";
import useStore from "../store";
import Eventexecution from "./Eventexecution";
const Exitpopups = () => {

  const campaign=useStore((state)=>state.campaign)
  const sethtml=useStore((state)=>state.sethtml)

  //getting html component according to campaign.types
  const getHtml=async()=>{
    try {
      if(campaign){
        const result =await axios.get(`http://localhost:3004/Event/${campaign.event}`)
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
     
  },[])

    
}

export default Exitpopups