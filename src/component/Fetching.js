import React, { useEffect } from 'react'
import axios from 'axios';
import Checking from './Checking';
const Fetching =() => {
    const fetch=async()=>{
        try {
            let result=await axios.get(`http://localhost:3004/popups/${window.campain.app_id}`);
            console.log(result.data)
             window.campainrules=result.data
            return Checking()
         } catch (error) {
            console.log(error)
         }
    }
    
    useEffect(()=>{
        fetch()
    },[])
  return (
    <></>
  )
}

export default Fetching