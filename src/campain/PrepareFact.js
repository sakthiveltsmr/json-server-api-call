import map from "lodash/map";
import RulesManager from "../RulesManager";
export class PrepareFact{
  

    constructor(props,final,id){
      this.rules=props
     
      this.Eventcall(final,id)


    }

    rulemanager=new RulesManager()

Eventcall(final,id){
   const data= map(this.rules.Rule.all||this.rules.Rule.any,(fact,i)=>{
       return fact
    })

  

    Object.values(data).map((rule)=>{
        window.localStorage.setItem("fact_"+id,JSON.stringify(rule))
        return this.rulemanager.Register(rule,final,id)
    })
   
 }
    
}