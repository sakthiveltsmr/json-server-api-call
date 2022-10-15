
// import useStore from '../store'
import Exitpopups from './Exitpopups'
const Checking = (campaign) => {
//  const campain=useStore((state)=>state.campain)
 console.log("read checking popups",campaign)
 
    switch(campaign.type)
    {
        case "Exitpopups":
            return Exitpopups(campaign)
            
            default:
                return null
    }
 
    
  
}

export default Checking