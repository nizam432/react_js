import React from 'react'

function Todo(props) {
    console.log(props.todos);
  return (
    <div>

        {props.todos.map((todo,index)=>(<p key={index}>{todo}</p>))}
    </div>
  )
}
export default Todo