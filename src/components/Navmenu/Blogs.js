import React from 'react';
import BlogData from './BlogData';
const Blogs = () => {
  return (
    <div>
        {
             BlogData.map((blog)={
                const {id,title,desc}=blog;
                return <article>

                    </article>
                
             });    
        }
       
    </div>
  )
}

export default Blogs