import React, { useEffect, useState } from 'react'

const FetchData = (url) => {
    const [todos, setTodos] = useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res){
                return "Something is worng";
            }else{
                return  res.json();
            }
        })
        .then((data) => {
            setTodos(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
    });

    const errorMessage = error && <p> {error} </p>;
    const loadingMessage = isLoading && "data is loading";
  
    const todosElement =
      todos &&
      todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.subject_title}</p>
        </div>
      ));
  
    return (
      <div>
        {errorMessage}
        {loadingMessage}
        {todosElement}
      </div>
    );
}

export default FetchData