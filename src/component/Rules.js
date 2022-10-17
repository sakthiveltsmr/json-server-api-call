
import useStore from '../store'
import map from "lodash/map"
import Exitpopups from './Exitpopups'
const Rules = () => {

 const html=useStore((state)=>state.html)
 const Testcase=(html)=>{
   return map(html,(item,i)=>{
 console.log(item,"for rules")
 console.log(item.type,"data")
        
    switch(item.type)
     {
     case "Exitpopups":
          return <Exitpopups key={i} html={item._html}/>
             
     default:
          return null
     }

    })
     
                
  }
  return(
               html ? <div>{Testcase(html)}</div>:null
    )  
  
}

export default Rules