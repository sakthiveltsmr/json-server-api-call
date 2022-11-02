export class Frequency{

    Register(rule,facts,id){
        this.event={rule,facts,id}
       console.log("--------------rule,facts,id",rule,facts,id);
        this.EventCall()
    }
    

    EventCall(){
      let Timer=setInterval(()=>{
        const counter=window.localStorage.getItem(this.event.id)
        if(counter){
            clearInterval(Timer)
            if(this.event.rule.operator==="lessThan"){
             if(!counter<=this.event.rule.value){
               return this.event.facts[this.event.rule.fact]=counter
               
             }else{
              
                return this.event.facts[this.event.rule.fact]=counter
             }
                
            }
           
        }else{
            window.localStorage.setItem(this.event.id,0)
        }
      },1000)
        
       
        
        //     if(!counter<=this.event.config.value){
                
        //         return facts[this.event.config.fact]=counter
             

        // }else{
        //     window.localStorage.setItem(id,1)
        // }
        
        
     

    }
}