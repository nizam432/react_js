import React, { useEffect, useState } from 'react'
import axios from 'axios'
const FetchData = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{

/*const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET,POST,PATCH,OPTIONS'
                }*/

        axios.get("https://amarporashuna.com/api/getSubject")
        .then((res)=>{

              setTodos(res.data);
              setIsLoading(false);
        })
        .catch((error) => {
            
            setError(error.message);
        });
        },2000);
    });

    const errorMessage = error && <p> {error} </p>;
    const loadingMessage = isLoading && "data is loading";
  
    const todosElement =
      todos &&  todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.subject_title}</p>
          <p>{todo.picture}</p>
           
        </div>
      ));
  
    return (
      <div>
        hello world 123 
        {errorMessage}
        {loadingMessage}
        {todosElement} 
      </div>
    );
}

export default FetchData