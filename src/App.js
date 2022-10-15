import axios from "axios";
import { useEffect} from "react";
import Checking from "./component/Checking";
import useStore from "./store";

function App() {
  // const[campaign,setCampaign]=useState()
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
  campain ? <><Checking campaign={campain}/></>:null
)
}

export default App;
