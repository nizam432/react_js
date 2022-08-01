import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const Todo = (props) => {
    const {title,desc,id}=props.todo;
    const handleClick=(id)=>{
        alert(id);
    }
  return (
    <article>
        <div className='col-sm-6 offset-sm-3'>
            <table className='table  table-striped'>
                <tr>
                    <td>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </td>
                    <td>
                        <Button style={{background:"red"}} variant='danger' onClick={handleClick(id)} > <i className="fa fa-trash"></i> </Button>
                    </td>
                </tr>
            </table>
        </div>    
    </article>
  )
} 

export default Todo
