import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <section>
      <div className="container">
        <Outlet />
      </div>
    </section>
  )
}

export default Content