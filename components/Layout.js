import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

export const Layout = ({children}) => {
  return (
    <>  
        <Header />
        <Navbar />
        {children}
        <Footer />
    </>
  )
}
