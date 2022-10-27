import axios from "axios";

import { useEffect, useState} from "react";
import Fetchpopup from "./component/Fetchpopups";
import useStore from "./store";


function App(props) {

 
  const [loading,setLoading]=useState(true)
  
  const setCampain=useStore((state)=>state.setCampain)

   
  const fetch=async()=>{
    try {
        let result=await axios.get(`http://localhost:3004/popups/${window.campainrabbit.app_id}`);
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
  {!loading ? <> <Fetchpopup/> </>:null}
  </>
)
}

export default App;
