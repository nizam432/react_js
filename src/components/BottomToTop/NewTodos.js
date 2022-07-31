import React, { useState } from 'react'

function NewTodos(props) {
    const [todo,setTodo]=useState("");

    const handleSubmit=(e)=>{

        e.preventDefault();
        props.onTodoData(todo);
    }
    const handleOnChange=(e)=>{
        setTodo(e.target.value);
    }
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <input type="text" name="todo" id="todo" onChange={handleOnChange}/>
            <button type="submit">submit</button>
        </form>

    </div>
  )
}

export default NewTodos