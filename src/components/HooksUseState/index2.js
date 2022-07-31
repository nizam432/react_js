import React,{useState}  from 'react'

export default function HooksUseState() {
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1);
    }    
  return (
    <div>
    <p>Count: {count}</p>
    <button onClick={handleIncrement}>Increase</button>
    </div>

  )
}


