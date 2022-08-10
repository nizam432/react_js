import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0);
    const [isloading,setIsloading] =useState(false);
    useEffect(()=>{
        console.log("UseEffect");
    },[count]);

  return (
    <div>
         {console.log("Rendering")};
        <p>Count: {count}</p>
        <button onClick={()=>{setCount(count=>count+1)}}>+</button>
        <button onClick={()=>{
            setIsloading(!isloading)
            }}>
                isloading
            </button>
    </div>
  )
}

export default UseEffect