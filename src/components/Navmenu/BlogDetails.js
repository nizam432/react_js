import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BlogData } from './BlogData';


const BlogDetails = () => {
    const {title}=useParams();

    const location=useLocation();

/*     const [bodyData,setBodyData]=useState("");
    console.log(location);
    useEffect(()=>{
        const BlogData2=BlogData.filter((blog)=>blog.title===title);
        setBodyData(BlogData2[0].desc);
    }); */

    return <div>
        {location.state.title}
        {location.state.desc}
    </div>
}

export default BlogDetails