import map from"lodash/map"
import Exitpopups from "./Exitpopups"
import Banner from "./Banner"
import Welcome from "./Welcome"
import Addtocart from "./Addtocart"
const Rules = ({html}) => {

  
 const CampaignRules=(type)=>{

       switch(type)
        {
        case "Exitpopups":
             return Exitpopups 
        case "Banner":
            return Banner
        case "Welcomepopups":
            return Welcome 
        case "Addtocart":
            return Addtocart  
                
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