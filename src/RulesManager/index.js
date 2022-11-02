import {Cart_value}  from "./Cart_value"
import {CurrentPage}from "./CurrentPage"
import {Exclude_page_visitor}from "./Exclude_page_visitor"
import {Frequency} from "./Frequency"
import {Spentonpage}from "./Spentonpage"
import {Spentonsite}from "./Spentonsite"
import {visitedURL}from "./visitedURL"

export default class RulesManager{
     
    CurrentPage=new CurrentPage()
    Cart_value=new Cart_value()
    Exclude_page_visitor=new Exclude_page_visitor()
    Frequency=new Frequency()
    Spentonpage=new Spentonpage()
    Spentonsite=new Spentonsite()
    visitedURL=new visitedURL()

 Register(rule,final,id){
  
        switch (rule.fact) {
            case 'currentPage': {
              return this.CurrentPage.Register(rule,final,id)
            }
            case 'spent_on_page': {
              return this.Spentonpage.Register(rule,final,id)
            }
            case 'spent_on_site': {
              return this.Spentonsite.Register(rule,final,id)
            }
            case 'frequency': {
              return this.Frequency.Register(rule,final,id)
            }
            case 'visitedURL': {
              return this.visitedURL.Register(rule,final,id)
            }
            case 'cart_value': {
              return this.Cart_value(rule,final,id)
            }
            case 'exclude_page_visitor': {
              return this.Exclude_page_visitor(rule,final,id)
            }
            default: {
              return () => null
            }
          }
    }
}