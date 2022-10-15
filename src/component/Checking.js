import useStore from '../store'
import Exitpopups from './Exitpopups'
const Checking = () => {
    
 const campaign=useStore((state)=>state.campaign)

    switch(campaign.type)
    {
        case "Exitpopups":
            return Exitpopups()
            
            default:
                return null
    }
  
}

export default Checking