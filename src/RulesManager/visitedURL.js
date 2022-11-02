export class visitedURL{

Register(rule,facts){
    this.event={rule,facts}
   this.EventCall()
}

EventCall(){

  
   let Timer=setInterval(()=>{
    const location=window.localStorage.getItem(`VisitedURL`)
    
    if(location){
        clearInterval(Timer)
        return this.event.facts[this.event.rule.fact]=this.event.rule.value
    } 
    if(this.event.rule.operator==="equal"){
        if(window.location.href===this.event.rule.value){
            window.localStorage.setItem("VisitedURL",`${window.location.href}`)
    
        }
    }
   
   },1000)
}
    
}