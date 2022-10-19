import React, { Component } from 'react';
import Modal from './modal';  
import SlideIn from './slideIn';
import FloatingBar from './FloatingBar';
import TopBar from './topBar';
import PopupTop from "./popperTop"


const Popper = (props) => {
   const  getPopper=(type)=>{
        switch(type){
            case 'popup':
                return Modal; 
            case 'slide-in':
                return SlideIn;
            case 'floating-bar-bottom':
                return FloatingBar;
            case 'floating-bar-top':
                return TopBar;
            case 'popup-top':
                return PopupTop
            default:
                return _ => null;
        }
    }
   const Position=()=>{
     let Displayposition=getPopper(props.type)
     return <Displayposition html={props.html} show={props.show}/>
   }

  return Position()
}



  

   


export default Popper;