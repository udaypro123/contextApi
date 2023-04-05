import React, { useContext } from 'react'
import contextdata from './context'

const Part4 = () => {
  const { data } = useContext(contextdata)

  return (
    <>
      <div className='part4'>
        { data }
      </div>
    </>
  )
}

export default Part4
