
import useStore from '../store'
import map from "lodash"
import Exitpopups from './Exitpopups'
const Rules = () => {

 const html=useStore((state)=>state.html)

 const Testcase=(html)=>{
    map(html,(item,i)=>{
        switch(item.type)
     {
         case "Exitpopups":
             return <Exitpopups html={item._html}/>
             
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