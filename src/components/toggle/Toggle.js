import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true);

  return (
    <div>
        {toggle && (
        <p> hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world  hello world </p>
        )}
    <button onClick={()=>{
        setToggle(!toggle)
    }}>
        {toggle? 'Hide' : 'Show'}
    </button>
    </div>

  )
}

export default Toggle
