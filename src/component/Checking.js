
import useStore from '../store'

import Exitpopups from './Exitpopups'
const Checking = () => {
 const campain=useStore((state)=>state.campain)
 console.log("read checking popups",campain)

 const Testcase=(campain)=>{

     switch(campain.type)
     {
         case "Exitpopups":
             return <Exitpopups/>
             
             default:
                 return null
     }
                
  }
  return(
               campain ? <div>{Testcase(campain)}</div>:null
    )  
  
}

export default Checking