import map from"lodash/map"
import Exitpopups from "./Exitpopups"
import Banner from "./Banner"
import Welcome from "./Welcome"
import Addtocart from "./Addtocart"
const Rules = ({html}) => {

  
 const renderCampaignRules=()=>{

   return map(html.events,(item,i)=>{

       switch(item.type)
        {
        case "Exitpopups":
             return <Exitpopups key={i} html={item._html}/>
        case "Banner":
            return <Banner key={i} html={item._html}/>
        case "Welcomepopups":
            return <Welcome key={i} html={item._html}/>
        case "Addtocart":
            return <Addtocart  key={i} html={item._html}/>
                
        default:
             return null
        }
   
       })
        
       
     }
   

  return(
    <div>
        { html.length!==0 ? <div>{renderCampaignRules()}</div>:null}
    
    </div>
              
    )  
  
}

export default Rules