import React from 'react'
import Nav from './nav'
import Navhome from './navhome'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Walpaper from './wallpaper'
import Homepage from "../Home/homepage"
import Register from '../register/register'



export default function Homeapp() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' exact element={<  Homepage/>} />
            <Route path='/about' exact element={<Navhome name="about" />} />
            <Route path='/courses' exact element={<Navhome name="courses" />} />
            <Route path='/login' exact element={<Navhome name="login" />} />
            <Route path='/register' exact element={<Register  />} />
        </Routes>
    </BrowserRouter>

      
    </div>
  )
}