
import Exitpopups from './Exitpopups'
const Rules = ({html}) => {

  
 const Testcase=()=>{

   const data=html.events.map((item,i)=>{
    
           
       switch(item.type)
        {
        case "Exitpopups":
             return <Exitpopups key={i} html={item._html}/>
                
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