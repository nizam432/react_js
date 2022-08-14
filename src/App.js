import React, { useState } from 'react'
import Contact from './components/Navmenu/Contact'
import Home from './components/Navmenu/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/Navmenu/Nav';
import AboutUs from './components/Navmenu/AboutUs';
import Blogs from './components/Navmenu/Blogs';
//import Error from './components/Navmenu/Error';
import BlogDetails from './components/Navmenu/BlogDetails';
import User from './components/Navmenu/User';
import AddBlog from './components/Navmenu/AddBlog';
import Protected from './components/Navmenu/Protected';
import GetApi from './components/Api/GetApi';



export default function App() {
    const [isLogin,setIsLogin]=useState(false);
  return ( 
    <div>
   
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/get-api" element={ <GetApi /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about_us" element={ <AboutUs /> } />
            <Route path="/blogs" element={ <Blogs /> } />
            <Route path="/blogs/:title" element={ <BlogDetails /> } />
            <Route path="/user" element={ <User /> } />
            <Route path="/add-blog" element={ <Protected isLogin={isLogin}>  <AddBlog /> </Protected> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
