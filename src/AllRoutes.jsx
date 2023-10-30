import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './componet/login'
import SignUp from './componet/Signup'
import Home from './Home'
import Post from './componet/Post'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/posts" element={<Post/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes