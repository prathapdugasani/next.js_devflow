import React, { ReactElement } from 'react'

import Navbar from '@/components/naviagtion/navbar'

const RootLayout = ({children}:{children:ReactElement}) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default RootLayout