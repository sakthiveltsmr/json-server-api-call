import map from"lodash/map"
import { useEffect } from "react"

import { PopupsManager } from "../PopupsManager"

import useStore from "../store"
const Rules = () => {

 const Rule=useStore((state)=>state.Rules)
   
 const CampaignRules=(item)=>{
         console.log("haii",item.type)
       switch(item.type)
        {
        case "Exitpopups":
             PopupsManager.OnExitIntent(item.active,item.type)
             break;
        case "Banner":
            PopupsManager.OnBannerIntent(item.active,item.type)
            break;
        case "Welcomepopups":
            PopupsManager.OnWelcomeIntent(item.active,item.type)
            break;
        case "Addtocart":
            PopupsManager.OnAddtocartIntent(item.active,item.type)
            break;
        default:
             null()
             
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