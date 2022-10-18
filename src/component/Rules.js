import map from"lodash/map"
import { PopupsManager } from "../PopupsManager"
const Rules = ({html}) => {

  
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
        return <CampainRules key={i} html={item._html} show={true}/>
    })
 }
  return(
    <div>
        { html.length!==0 ? <div>{renderCampaignRules()}</div>:null}
    
    </div>
              
    )  
  
}

export default Rules