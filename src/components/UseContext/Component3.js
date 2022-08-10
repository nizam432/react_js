import React, { useContext } from 'react'
import Component4 from './Component4'
import { userContext } from './UserContext'


const Component3 = ({user}) => {
    const data=useContext(userContext);
  return (
    <div>
        <p>ID: {data.id}</p>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
    </div>
  )
}

export default Component3