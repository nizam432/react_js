import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos=[
    {
        id:uuidv4(),
        title:"This test title 1",
        desc:"This test description 1"
    },
    {
        id:uuidv4(),        
        title:"This test title 2",
        desc:"This test description 2"
    },
    {
        id:uuidv4(),        
        title:"This test title 3",
        desc:"This test description 3"
    },
    {
        id:uuidv4(),        
        title:"This test title 4",
        desc:"This test description 4"
    },
    {
        id:uuidv4(),        
        title:"This test title 5",
        desc:"This test description 6"
    }
];
const List = ()=>{
    return <div>
        {todos.map((todo)=>{
            return( <div key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div>
            );
        })}
    </div>;
};

export default List;