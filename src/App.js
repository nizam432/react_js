import React from 'react'
import Contact from './components/Navmenu/Contact'
import Home from './components/Navmenu/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/Navmenu/Nav';
import AboutUs from './components/Navmenu/AboutUs';
import Blogs from './components/Navmenu/Blogs';



export default function App() {

  return ( 
    <div>
   
      <BrowserRouter>
      <Nav />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/about_us" element={ <AboutUs /> } />
            <Route path="/blogs" element={ <Blogs /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
