

const Banner = ({html}) => {
  
    document.onmouseenter=()=>{
        let main=document.getElementById('root');
               let  div=document.createElement('div');
               div.innerHTML=`${html}`
               main.appendChild(div)

               return main
    }
}

export default Banner