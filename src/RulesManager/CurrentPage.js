

export class CurrentPage{
 
   
    Register(rule,facts){
        this.eventRules={rule,facts}
        this.Eventcall()
    }

    Eventcall(){

       if(this.eventRules.rule.operator==="equal"){
        if(this.eventRules.rule.value===window.location.href){
            return this.eventRules.facts[this.eventRules.rule.fact]=window.location.href
        }else{
            return this.eventRules.facts[this.eventRules.rule.fact]=window.location.href
        }
       }
    }
    

}