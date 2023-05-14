import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Packages from '../components/Packages'
import Services from '../components/Services'
import Shop from '../components/Shop'
import Page from '../components/Page'
import Profile from '../components/Profile'
import Login from '../components/Login';
import Register from '../components/Register'

const Routing = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Package' element={<Packages/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/Page' element={<Page/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>


      </Routes>
    </>
  )
}

export default Routing