// import { Action } from "../campain/Action";
import useStore from "../store";
import {Action} from "../campain/Action"

const Welcome = ({type,show}) => {
    const Rule=useStore((state)=>state.Rules)
    const setRule=useStore((state)=>state.setRules)
  
     function getMouseEvent(){
        document.addEventListener("mouseenter", (e) => { 
          
            if(!show){

              return Action.ActiveEvent(type,Rule,setRule)

             
            }
         
     });
     }
    
   
    
  return getMouseEvent()
}

export default Welcome