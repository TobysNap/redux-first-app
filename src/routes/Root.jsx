import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
      <>
          <button><Link to='/create'>Escribir un post</Link></button>
          <button><Link to='/posts'>Ver todos los posts</Link></button>
          <Outlet />
      </>
  )
}

export default Root