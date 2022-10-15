import useStore from "../store";

const Eventexecution = () => {

    const html=useStore((state)=>state.html)
    const campaign=useStore((state)=>state.campaign)
    const setCampain=useStore((state)=>state.setCampain)

    document.onmouseout=(event)=>{
        if(event.clientY<=0){
            console.log(event.clientY)
           if(campaign.active){
               setCampain({...campaign,active:false})
               let main=document.getElementById('root');
               let  div=document.createElement('div');
               div.innerHTML=`${html._html}`
               main.appendChild(div)
           const close= document.getElementById('close')

//on click event for close the popups
           close.addEventListener("click",()=>{
             return div.style.display='none'
           })    
               return main
            }

        }
    }
 
}

export default Eventexecution