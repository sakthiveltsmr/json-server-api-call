import { useEffect } from 'react'
import useStore from '../store'
import Exitpopups from './Exitpopups'
const Checking = () => {
 const campaign=useStore((state)=>state.campaign)
 console.log("read checking popups")
 useEffect(()=>{
    switch(campaign.type)
    {
        case "Exitpopups":
            return Exitpopups()
            
            default:
                return null
    }
 },[campaign])
    
  
}

export default Checking