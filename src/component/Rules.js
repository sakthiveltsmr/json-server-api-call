import map from"lodash/map"

import { PopupsManager } from "../PopupsManager"

import useStore from "../store"
const Rules = () => {

 const html=useStore((state)=>state.html)

 const CampaignRules=(type)=>{

       switch(type)
        {
        case "Exitpopups":
             return PopupsManager.OnExitIntent 
        case "Banner":
            return PopupsManager.OnBannerIntent
        case "Welcomepopups":
            return PopupsManager.OnWelcomeIntent 
        case "Addtocart":
            return PopupsManager.OnAddtocartIntent  
                
        default:
             return null
        }
   
    //    })
        
       
     }
   
 const renderCampaignRules=()=>{
    return map(html.events,(item,i)=>{
        let CampainRules=CampaignRules(item.type)
        return <CampainRules key={i} type={item.type} show={item.active}/>
    })
 }
  return(
    <div>
        { html.length!==0 ? <div>{renderCampaignRules()}</div>:null}
    
    </div>
              
    )  
  
}

export default Rules