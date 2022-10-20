import  map  from 'lodash/map'
import React from 'react'
import useStore from '../store'
import Exit from '../event/Exit'
import Welcome from '../event/Welcome'
import Banner from '../event/Banner'
import Addtocart from '../event/Addtocart'
import Coupon from '../event/Coupon'
const PopupManager = () => {

    const Rule=useStore((state)=>state.Rules)

    const getIntent=(type)=>{
        switch(type){
            case "Welcome":
                return Welcome
            case "Exit":
                return Exit
            case "Banner":
                return Banner
            case "Addtocart":
                return Addtocart
            case "Coupon":
               return Coupon
            default:
                return _ => null
        }
    }

const CampainEvents=()=>{
    return map(Rule.events,(item,i)=>{
        let  CampainRulesEvent=getIntent(item.type)
        return <CampainRulesEvent show={item.active} type={item.type} id={i}/>
    })
}
  return CampainEvents()
}

export default PopupManager