import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
        <h3>Contact Page</h3>
        <p>lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
        </p>
        <div>
      <button onClick={()=>{
        navigate("/")
      }}>Go To Home Page</button>
    </div>
    </div>

  
  )
}

export default Contact