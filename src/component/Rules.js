
import { Addtocart } from './Addtocart'
import Banner from './Banner'
import Exitpopups from './Exitpopups'
import Welcome from './Welcome'
const Rules = ({html}) => {

  
 const Testcase=()=>{

   const data=html.events.map((item,i)=>{

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
        
        return data           
     }
   

  return(
    <div>
        { html.length!==0 ? <div>{Testcase()}</div>:null}
    
    </div>
              
    )  
  
}

export default Rules