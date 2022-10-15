import axios from "axios";
import { useEffect, useState } from "react";
import Checking from "./component/Checking";
// import useStore from "./store";

function App() {
  const[campaign,setCampaign]=useState()
  // const setCampain=useStore((state)=>state.setCampain)
  
   
  const fetch=async()=>{
    try {
        let result=await axios.get(`http://localhost:3004/popups/${window.campain.app_id}`);
        console.log(result.data)
        setCampaign(result.data)
     } catch (error) {
        console.log(error)
     }
}

useEffect(()=>{
    fetch()
},[])
return (
<>{Checking(campaign)}</>
)
}

export default App;
