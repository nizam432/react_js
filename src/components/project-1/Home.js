import React, { useState } from 'react';
import NewTodo from './NewTodo';            
import Todos from './Todos';
import {v4 as uuidv4} from "uuid";



const Home = () => {
const [todos,setTodos]=useState([]);

const handleAddTodo=(todo)=>{
    setTodos((prevTodos)=>{
        return [...prevTodos, {id:uuidv4(),todo }];
    })
}

const handleRemove=(id)=>{

}
  return (
    <div>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemove}/>
    </div>
  )
}

export default Home
