import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
const GetApi = () => {
    const url="https://rest-api-without-db.herokuapp.com/users/";
    const [users,setUser]=useState("");
    const [error,setError]=useState("");
    const [isLaoding,setIsLaoding]=useState("");
    const getAllUsers=()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw error("Could not fetch");
            }
            return res.json();
        })
        .then((data)=>{
            setUser(data.users);    
        })
        .catch((error)=>{
            setError(error.message);    
        })
        .finally(()=>{
            setIsLaoding(false);
        });
    }

    useEffect(()=>{
       getAllUsers();
    },[]);

    const handleDelete=(id)=>{
        fetch(url + `/${id}`,{
            method:"DELETE"
        })
        .then((res)=>{
            if(!res.ok){
                throw error("Could not DELETE");
            }
            getAllUsers();
        })

        .catch((error)=>{
            setError(error.message);    
        });

    }
   
  return (
    <div>
        <h1>User Management</h1>
        {isLaoding && <h2>Loading...</h2>}
        {error && {error}}
        {users && users.map((user)=>{
            const {id,username,email}=user;
           return <div className="col col-md-4">
            <article key={id} >

                <Card>
                    <Card.Title>User Information</Card.Title>
                    <Card.Body>
                        <p>{username}</p>
                        <p>{email}</p>
                        <Button>Edit</Button>
                        <Button variant='danger' onClick={()=>{handleDelete(id)}}>Delete</Button>
                    </Card.Body>
                </Card>

           </article> 
           </div>
        })}
    </div>
  )
}

export default GetApi