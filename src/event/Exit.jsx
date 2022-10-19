
import {Action} from "../campain/Action2"
import useStore from "../store";

const Exit = ({type,show}) => {
  
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
    
    document.addEventListener("mouseout", (e) => { 
         if (e.clientY <= 0){   
               if(!show){
                return Action.ActiveEvent(type,Rule,setRule)
               }
            }
        });
    
  return null
}

export default Exit