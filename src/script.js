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

async function FecthingData (){
 try {
    let data=await fetch(`http://localhost:3004/popups/${window.campain.app_id}`);
   const rules = await data.json()
   window.campainrules=rules
   Checking()
 } catch (error) {
    console.log(error)
 }
   
  
}
       
FecthingData()

function Checking(){

    switch(window.campainrules.type)
    {
        case "Exitpopups":
            return Exitintent()
            
            default:
                return null
    }
}



function  Exitintent(){

    document.onmouseout=(event)=>{

        if(event.screenY<=150){
           if(window.campainrules.active){
                window.campainrules.active=false;
               let main=document.getElementById('root');
               let  div=document.createElement('div');
               div.innerHTML=`${window.campainrules._html}`


           div.addEventListener("click",()=>{
             return div.style.display='none'
           })    

           
               main.appendChild(div)
               setTimeout(()=>{
                 div.style.display = "none";
               },5000)

               return main
            }else{
                
            }

        }
    }
}