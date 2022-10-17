import axios from "axios";
import { useEffect} from "react";
import Fetchpopupshtml from "./component/Fetchpopupshtml";
import useStore from "./store";

function App() {
  
  const campain=useStore((state)=>state.campain)
  const setCampain=useStore((state)=>state.setCampain)
  
   
  const fetch=async()=>{
    try {
        let result=await axios.get(`http://localhost:3004/popups/${window.campain.app_id}`);
        console.log(result.data)
        setCampain(result.data)
     } catch (error) {
        console.log(error)
     }
}

useEffect(()=>{
    fetch()
},[])

return (
  campain ? <><Fetchpopupshtml/></>:null
)
}

export default App;
