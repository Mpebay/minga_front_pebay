import React from 'react'
import Layout from '../Layout/layout'
import Index from '../pages/Index'


export default function Body() {
  return (
    <div className="xs: w-full h-screen bg-fondoMobile bg-cover md:bg-none">

      <Layout prop1="soy una propiedad">
        <Index/>
      </Layout>


    </div>
  )
}


