import React, { useState } from 'react'
import NewTodos from './NewTodos';
import Todo from './todo';

const dhummytodos=["todo1","todo2","todo3"];

function Home() {
    const [todos,setTodos]=useState(dhummytodos);
    
    const handleNewTodo=(newTodo)=>{
        setTodos([... todos, newTodo]);
    }
  return (
    <div>
        <NewTodos onTodoData={handleNewTodo} />
        <Todo todos={todos} />
    </div>
  )
}

export default Home