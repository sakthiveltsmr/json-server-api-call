import map from 'lodash/map'
// import { useEffect } from 'react'
import Campainrules from '../Rules.json'

import { Engine } from 'json-rules-engine'

export const Action = async (id,datas) => {
  
  let rules = new Engine()

  map(Campainrules, (i) => {
    if (i.id === id) {
      rules.addRule({
        conditions: i.Rule,
        event: {
          type: i.type,
          params: {
            message: 'show popups!',
            success: true,
          },
        },
      })
    }
  })

  const Engines = async () => {
    return rules
      .run(datas)
      .then(({ events }) => {
        const data = events.map((e) => {
          if (e.params.success === true) {
            
            return e.params.success
          }
        })
       
        return data
      })
      .catch((error) => {
        console.log(error)
        return false
      })
  }

  

  return await Engines()
}
