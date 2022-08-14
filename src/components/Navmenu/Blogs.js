import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BlogData} from './BlogData';
const Blogs = () => {
const [blogs,setBlogs]=useState(BlogData);
const wordlimit=(str,num)=>{
  if(str.length>num){
    return str.slice(0,num) + "...";
  }else{
    return str;
  }
}
return (<div>
  <h1>Blog Page</h1>
  {
    blogs.map((blog)=>{
      const {id,title,desc}=blog;
      return <article key={blog.id}>
        
        <Link to={blog.title} state={{id,title,desc}}>{blog.title}</Link>
          
          
        <p>{wordlimit(blog.desc,50)}</p>
        
      </article>
    })
  }
</div>  )  


}

export default Blogs