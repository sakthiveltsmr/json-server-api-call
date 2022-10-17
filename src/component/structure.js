import React from 'react'

const Structure = (html) => {
    console.log("in html",html)
  return (
    <>
    <div dangerouslySetInnerHTML={{__html:html}}></div>
    </>
    
  )
}

export default Structure