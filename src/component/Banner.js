// import { useState } from "react";
import Structure from "./structure";


const Banner = ({html,show}) => {

    return(
        <>
      {show?
       <Structure html={html}/>:null}
        </>
    )
}

export default Banner