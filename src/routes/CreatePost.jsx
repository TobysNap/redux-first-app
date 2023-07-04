import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const One = () => {
  const dispatch = useDispatch();
  const initialState = useSelector(state => state.posts.nombre)
  return (
    <>
      <h1>{ initialState }</h1>
    </>
  )
}

export default One