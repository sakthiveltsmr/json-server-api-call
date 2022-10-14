function getMountnode() {


    const elemetID = "root"
    let MOUNT_NODE = document.getElementById("root")

    if (!MOUNT_NODE) {
        const element = document.createElement('div')
        element.innerHTML = `<div id="${elemetID}"></div>`
        document.body.appendChild(element)
        MOUNT_NODE = document.getElementById(elemetID)

    }
    console.log('root success')

    return MOUNT_NODE
}

getMountnode()


window.campain={
  app_id:1,
  domain:window.location.href,

}

function FecthingData(){

    fetch(`http://localhost:3004/popups/${window.campain.app_id}`).then((response)=>{
        window.campainattribute=response.data
        Checking()
        }).catch((error)=>{
            console.log(error)
        })
}

FecthingData()

function Checking(){

    switch(window.campainattribute.type)
    {
        case "Exitpopups":
            return Exitintent()
            
            default:
                return null
    }
}



function  Exitintent(){

    document.onmouseout=(event)=>{
        if(event.screenY<=200){
            let main=document.getElementById('root');
            let  div=document.createElement('div');
             div.innerHTML=`${window.campainattribute._html}`

             main.appendChild(div)
             return main

        }
    }
}