import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/> 
    </>
  )
}

export default Layout