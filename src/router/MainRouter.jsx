import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import CreateUser from '../pages/createUser/CreateUser'
import Users from '../pages/users/Users'

const MainRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Layout/>}>
                <Route path='/' element = {<Home/>}/>
                <Route path='users' element = {<Users/>}/>
                <Route path='/create-user' element = {<CreateUser/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default MainRouter