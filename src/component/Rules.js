import map from"lodash/map"
import { useEffect } from "react"

import { PopupsManager } from "../PopupsManager"

import useStore from "../store"
const Rules = () => {

 const Rule=useStore((state)=>state.Rules)
   
 const CampaignRules=(type)=>{

       switch(type)
        {
        case "Exitpopups":
             PopupsManager.OnExitIntent ()
             break;
        case "Banner":
            PopupsManager.OnBannerIntent()
            break;
        case "Welcomepopups":
            PopupsManager.OnWelcomeIntent ()
            break;
        case "Addtocart":
            PopupsManager.OnAddtocartIntent  ()
            break;
        default:
             null()
             break;
        }
   
    //    })
        
       
     }
useEffect(() => {
     map(Rule.events,(item,i)=>{
                CampaignRules(item.type)
            })
}, [Rule])

//  const renderCampaignRules=()=>{
//     return map(Rule.events,(item,i)=>{
//         let CampainRules=CampaignRules(item.type)
//         return <CampainRules key={i} type={item.type} show={item.active}/>
//     })
//  }
  return(
    <div>
        {}
    
    </div>
              
    )  
  
}

export default Rules