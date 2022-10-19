import axios from "axios";
import  map  from "lodash/map";
import { useEffect, useState} from "react";
import Fetchpopupshtml from "./component/Fetchpopupshtml";
import useStore from "./store";
import Popper from "./popper"

function App() {

  const [loading,setLoading]=useState(true)
  const Rule=useStore((state)=>state.Rules)
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

 const handelLoad=()=>{
  return map(Rule.events,(item,i)=>{
    
    return <Popper type={item.position} id={i} html={item._html} show={item.active}/>
 })
 }


useEffect(()=>{
    fetch()
},[])

return (
  <>
  {!loading ? <>{handelLoad()} <Fetchpopupshtml/> </>:null}
  </>
)
}

export default App;
