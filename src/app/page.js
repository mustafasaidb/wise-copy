import React from 'react'
import Nav from '@/components/Nav'
import Main from '@/components/Main'
import Mission from '@/components/Mission'
import Security from '@/components/Security'

function page() {
  return (
    <div>
      <Nav />
      <Main />
      <Mission />
      <Security />
    </div>
  )
}

export default page