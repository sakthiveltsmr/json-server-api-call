import map from"lodash/map"
import{Addtocart,Exitpopups,Welcome,Banner}from"./event"
const Rules = ({html}) => {

  
 const handleCampain=(type)=>{

//    const data=html.events.map((item,i)=>{

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
        
        // return data           
     }
   
const  renderCampaignRules=()=>{
    return map(html,(item,i)=>{
        
        let CampaignRule=handleCampain(item.type)

        return <CampaignRule key={i} html={item._html}/>

    })
}
  return(
    <div>
        { html.length!==0 ? <div>{renderCampaignRules()}</div>:null}
    
    </div>
              
    )  
  
}

export default Rules