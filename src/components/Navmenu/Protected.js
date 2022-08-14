import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({isLogin,children}) => {
    if(!isLogin){
      return <Navigate to="/" replace />      
    }else{
        return children;
    }

    return children;
}


export default Protected