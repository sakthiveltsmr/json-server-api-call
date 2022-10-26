import map from 'lodash/map'
import { useEffect, useState } from 'react'

import { PopupManager } from '../PopupsManager'
import Popper from '../popper'

import useStore from '../store'

const Rules = () => {
  const [popup, setPopup] = useState({})

  const Rule = useStore((state) => state.Rules)

  useEffect(() => {
    map(Rule.Rules, (item) => {
      setPopup({...popup,[item.id] : false})
    })
   
  }, [])
  
 const handelLoad=()=>{
   return map(Rule.Rules,(item,i)=>{
        return (<div>
             <Popper type={item.position} show={popup} html={item._html} id={item.id}/>
             </div>)  
      })
 }
    
  useEffect(()=>{
   
      map(Rule.Rules, (item, i) => {
        new PopupManager(item.type,{
           onRun:()=>{
             if(!popup[item.id]){
              setPopup({...popup,[item.id]:true})
             }
            else{
              setPopup({...popup,[item.id]:false})
            }  
         }
      })
      })
    

 },[popup])//error
  
 


  return( <div>{handelLoad()}</div> )
}

export default Rules
