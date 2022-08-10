import React, { useState } from 'react';
import style from "./faq.module.css";
const Fq = ({id,title,desc}) => {
const [toggle,setToggle]=useState(false);
  return (
    <div className={style.content}>
      <div>
        <h3>{title}</h3>
        <button onClick={()=>{setToggle(!toggle)}}>
          {toggle? <i className='fa fa-minus'></i> : <i className='fa fa-plus'></i>}</button>
      </div>
        {toggle && <p>{desc}</p> }
    </div>
  )
}

export default Fq
