import Fetching from "./Fetching"

export const Root = () => {
    const elemetID = "root"
    let MOUNT_NODE = document.getElementById("root")

    if (!MOUNT_NODE) {
        const element = document.createElement('div')
        element.innerHTML = `<div id="${elemetID}"></div>`
        document.body.appendChild(element)
        MOUNT_NODE = document.getElementById(elemetID)

    }
    window.campain={
        app_id:1,
        domain:window.location.href,
      
      }

    return(
    <>
    <div>{MOUNT_NODE}</div>
          <Fetching/>
    </>)
  
}
