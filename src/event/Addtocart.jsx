import {Action} from "../campain/Action2"
import useStore from "../store";

const Addtocart = ({type,show}) => {
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
    let Add=document.getElementById('addcart')
     Add.addEventListener("click", () => { 
           if(!show){
            return Action.ActiveEvent(type,Rule,setRule)
         }
             
         });
     
   return null
 }
 
 export default Addtocart