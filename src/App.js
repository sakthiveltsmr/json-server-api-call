import axios from "axios";
import { useEffect } from "react";
import Checking from "./component/Checking";
import useStore from "./store";

function App() {
  const setCampain=useStore((state)=>state.setCampain)
   
  const fetch=async()=>{
    try {
        let result=await axios.get(`http://localhost:3004/popups/${window.campain.app_id}`);
        console.log(result.data)
        await setCampain(result.data)
         return <Checking/>
     } catch (error) {
        console.log(error)
     }
}

useEffect(()=>{
    fetch()
},[])
}

export default App;
