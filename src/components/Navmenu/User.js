import React, { useState } from 'react'
import {useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParam,setSearchParam]=useSearchParams();
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParam({name:name,age:age});

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="name" onChange={(e)=>{
                setName(e.target.value)
            }}/>
<br></br>
            <input type="text" value={age} placeholder="age" onChange={(e)=>{
                setAge(e.target.value)
            }}/>     
            <br></br>       
            <button type="submit">Search Filter</button>
        </form>

    </div>
  )
}

export default User