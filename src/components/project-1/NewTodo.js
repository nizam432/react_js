import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'

const NewTodo = (props) => {
    const[todo,setTodo]=useState({title:"", desc:""});
    const {title,desc}=todo;
    const handleChange=(event)=>{
        const fieldName=event.target.name;
       
        setTodo((oldTodo)=>{
            return{...oldTodo,[fieldName]:event.target.value}
        })
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"", desc:""});
    }
  return (
    <div>
    <div className='col-sm-6 offset-sm-3 form_div'  >
        <Card>
            <Card.Body>
            <Card.Title>Registration</Card.Title>
            <Card.Text>
                <form action='' onSubmit={handleSubmit}>
                    <label className='form-label'>Title</label>
                    <input className='form-control' type="txt" name="title" id="title" onChange={handleChange} value={todo.title}  required />
                    <label className='form-label'>Descriction</label>
                    <input className='form-control' type="txt" name="desc" id="desc" onChange={handleChange}  value={todo.desc}   required />     
                    <Button variant='primary' type="submit" style={{marginTop: "20px"}}>Save</Button>
                </form>  
            </Card.Text>
            </Card.Body>            
        </Card>
    </div>
    </div>
  )
}

export default NewTodo
