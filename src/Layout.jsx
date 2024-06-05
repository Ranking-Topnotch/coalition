import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './component/nav/Nav'

const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet />
    </>
  )
}

export default Layout