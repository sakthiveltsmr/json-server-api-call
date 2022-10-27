import map from 'lodash/map'
import { useEffect, useState } from 'react'

import { PopupManager } from '../PopupsManager'
import Popper from '../popper'

import useStore from '../store'

const Rules = () => {
  const [popup, setPopup] = useState({})
  

  const popupManager = new PopupManager()

  const Rule = useStore((state) => state.Rules)

  
  //  useEffect(()=>{
  //   map(Rule.Rules, (item) => {
  //     setPopup({ ...popup,[item.id]: false })
     
  //   })
  //  },[])


  const handelLoad = () => {
    return map(Rule.Rules, (item, i) => {
      return (
        <div>
          <Popper
            key={i}
            type={item.position}
            show={popup}
            html={item._html}
            id={item.id}
          />
        </div>
      )
    })
  }

  useEffect(() => {
    
    let newPopup=JSON.parse(JSON.stringify(popup))
    
    for (let index = 0; index < Rule.Rules.length; index++) {
      
      const item = Rule.Rules[index];
      popupManager.register(
        item.type,{
          onRun: () => {
          if (!popup[item.id]) {
            newPopup={...newPopup,[item.id]:true}
            setPopup({...newPopup})
          } 
      
      }
    })
    }
    
    // map(Rule.Rules, (item, i) => {
    //   // setPopup({...popup,[item.type]:false})
    //    popupManager.register(
    //         item.type,{
    //           onRun: () => {
              
    //           if (!popup[item.id]) {
    //             newPopup={...newPopup,[item.id]:true}
    //           } 
          
    //       }
    //     })
          
        
         
    //     })
    },[popup])
        

    useEffect(() => {
      console.log(".........popup",popup)
    }, [popup])
      
       
        
      
  
  //error

  return <div>{handelLoad()}</div>
}

export default Rules
