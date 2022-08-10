import React, { useState } from 'react'
import Component2 from './Component2'
import { userContext } from './UserContext';

const Component1 = () => {
    const [user,setUser]=useState({id:1001,name:"MD NIZAM UDDIN",age:32});
  return (
    <userContext.Provider value={user}>
        <Component2 user={user} />
    </userContext.Provider>
  )
}

export default Component1