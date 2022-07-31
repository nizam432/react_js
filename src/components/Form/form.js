import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
//import style from './FormModule.css'

export default function Form() {
    const [user,setUser]=useState({name:"",email:"",password:"" });
    //const{name,email,password}=user;
    const handleSubmit=(e)=>{
       console.log(user);
        e.preventDefault();
    } 
    const handleChange=(e)=>{ 
        setUser({...user,[e.target.name]:e.target.value});
    }
 
  return (
    <div className='col-sm-6 offset-sm-3 form_div'  >
        <Card>
            <Card.Body>
            <Card.Title>Registration</Card.Title>
            <Card.Text>
                <form action='' onSubmit={handleSubmit}>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type="txt" name="name" id="name" onChange={handleChange}  required />
                    <label className='form-label'>Email</label>
                    <input className='form-control' type="txt" name="email" id="email" onChange={handleChange}  required /> 
                    <label className='form-label'>Passowrd</label>
                    <input className='form-control' type="password" name="password"  onChange={handleChange}  id="password" required />      
                    <Button variant='primary' type="submit" style={{marginTop: "20px"}}>Save</Button>
                </form>  
            </Card.Text>
            </Card.Body>            
        </Card>
    </div>
     )

}
