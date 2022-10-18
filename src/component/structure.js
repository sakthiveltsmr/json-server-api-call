import React from 'react'

const Structure = ({html}) => {
   
  return (
    <div dangerouslySetInnerHTML={{__html:html}}/>
    
  )
}

export default Structure