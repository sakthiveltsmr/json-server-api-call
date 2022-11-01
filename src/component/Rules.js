import map from 'lodash/map'
import { useEffect, useState } from 'react'

import { PopupManager } from '../PopupsManager'
import Popper from '../popper'
import useStore from '../store'
import { Action } from '../campain/Action'
const Rules = () => {
  const [popup, setPopup] = useState({})

  const popupManager = new PopupManager()

  const campainintent = useStore((state) => state.campainintent)

  const handelLoad = () => {
    return map(campainintent.Rules, (item, i) => {
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
    let newPopup = JSON.parse(JSON.stringify(popup))

    map(campainintent.Rules, (item, i) => {
      popupManager.register(item.type, {
        id:item.id,

        onRun: async(datas) => {
            //  Action(item.type,popup,setPopup,item.id)
            let data=await Action(item.id,datas)
        
          if(data[0]){
            if (!popup[item.id]) {
              newPopup = { ...newPopup, [item.id]: true }
              setPopup({ ...newPopup })
            }

          }
          
        },
      })
    })
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popup])

  return <div>{handelLoad()}</div>
}

export default Rules
