import React from 'react'
import Exitpopups from './Exitpopups'
const Checking = () => {
    switch(window.campainrules.type)
    {
        case "Exitpopups":
            return <><Exitpopups/></>
            
            default:
                return null
    }
  
}

export default Checking