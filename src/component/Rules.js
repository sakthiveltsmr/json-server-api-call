
import useStore from '../store'
import map from "lodash/map"
import Exitpopups from './Exitpopups'
const Rules = (html) => {

    console.log("html1111111111111111", html);

//  const html=useStore((state)=>state.html)
 const Testcase=()=>{
   const data=html.map((item,i)=>{
    console.log(html,"for html");
    console.log(item,"for rules")
    console.log(i,"data")
           
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
               html.length!==0 ? <div>{Testcase()}</div>:null
    )  
  
}

export default Rules