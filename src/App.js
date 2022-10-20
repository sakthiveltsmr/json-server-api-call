import axios from "axios";

import { useEffect, useState} from "react";
import FetchpopupsRules from "./component/Fetchpopupshtml";
import useStore from "./store";


function App() {

  const [loading,setLoading]=useState(true)
 
  const setCampain=useStore((state)=>state.setCampain)

   
  const fetch=async()=>{
    try {
        let result=await axios.get(`http://localhost:3004/popups/${window.campain.app_id}`);
        console.log(result.data)
        setCampain(result.data)
        setLoading(false)
     } catch (error) {
        console.log(error)
     }
}



useEffect(()=>{
    fetch()
},[])

return (
  <>
  {!loading ? <><FetchpopupsRules/> </>:null}
  </>
)
}

export default App;
