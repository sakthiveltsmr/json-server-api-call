import React from 'react';
import Modal from './modal';  
import SlideIn from './slideIn';
import FloatingBar from './FloatingBar';
import TopBar from './topBar';
import PopupTop from "./popperTop"
import PopperRight from './popperRight';


const Popper = (props) => {
  
   const  getPopper=(props)=>{
        switch(props.type){
            case 'popup':
                return <Modal html={props.html} show={props.show} event={props.id}/>; 
            case 'slide-in':
                return <SlideIn html={props.html} show={props.show} event={props.id}/>;
            case 'floating-bar-bottom':
                return <FloatingBar html={props.html} show={props.show} event={props.id}/>;
            case 'floating-bar-top':
                return <TopBar html={props.html} show={props.show} event={props.id}/>;
            case 'popup-top':
                return <PopupTop html={props.html} show={props.show} event={props.id}/>;
            case 'slide-in-right':
                return <PopperRight html={props.html} show={props.show} event={props.id}/>;
            default:
                return _ => null;
        }
    }
  
    
   

  return <>{getPopper(props)}</>
    
}



  

   


export default Popper;