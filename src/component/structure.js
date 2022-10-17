import React from 'react'

const Structure = ({html}) => {
  return (
    <div dangerouslySetInnerHTML={{_html:html}}/>
  )
}

export default Structure