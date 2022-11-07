import Head from 'next/head'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Head>
        <title>Pizza Hub</title>
        <meta name="description" content="Best Online Pizza Market in Africa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"></link>
    </div>
  )
}

export default Header