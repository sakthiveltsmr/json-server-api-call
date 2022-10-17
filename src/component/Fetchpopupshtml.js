import axios from "axios";
import { useEffect, useState } from "react";
import useStore from "../store";
import Rules from "./Rules"
// import Eventexecution from "./Eventexecution";
const Fetchpopupshtml = () => {
  const [html,setHtml]=useState([])
  const [loading,setLoading]=useState(false)
  const campain=useStore((state)=>state.campain)
  // const sethtml=useStore((state)=>state.setHtml)
 

  //getting html component according to campaign.types
  const getHtml=async()=>{

    try {

      if(campain.event){

        const result =await axios.get(`http://localhost:3004/Event/${campain.event}`)
        console.log("result.data", result.data)
        setHtml("setHtml", result.data)
        setLoading(true)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(()=>{
     
     getHtml()
     
  },[])

  return(
   loading ? <Rules html={html}/>:null
  )
 
  
   
}

export default Fetchpopupshtml