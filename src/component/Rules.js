import map from"lodash/map"
import { useEffect } from "react"

import { PopupsManager } from "../PopupsManager"

import useStore from "../store"
const Rules = () => {

 const Rule=useStore((state)=>state.Rules)
   
 const CampaignRules=(item)=>{

       switch(item.type)
        {
        case "Exitpopups":
             PopupsManager.OnExitIntent (item.type,item.active)
             break;
        case "Banner":
            PopupsManager.OnBannerIntent(item.type,item.active)
            break;
        case "Welcomepopups":
            PopupsManager.OnWelcomeIntent (item.type,item.active)
            break;
        case "Addtocart":
            PopupsManager.OnAddtocartIntent  (item.type,item.active)
            break;
        default:
             null()
             break;
        }
   
    //    })
        
       
     }
useEffect(() => {
     map(Rule.events,(item,i)=>{
                CampaignRules(item)
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