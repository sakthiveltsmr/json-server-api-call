import {Action} from "../campain/Action2"
import useStore from "../store";

const Coupon = ({type,show}) => {
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
  
    document.addEventListener("mousedown", () => { 
        
               if(!show){
                return Action.ActiveEvent(type,Rule,setRule)
               }
            
        });
    
  return null
}

export default Coupon