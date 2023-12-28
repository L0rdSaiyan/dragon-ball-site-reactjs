import React from "react";
import { useState } from "react";


function Counter()
{

    const [num, setNum] = useState(0)

    function increase()
    {
        setNum((currentNum) => currentNum+1)
    }


    return(

        <>
        
        <h1>{num}</h1>
        <button onClick={increase}>aumentar</button>
        </>


    )
}

 
export default Counter