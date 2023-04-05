import React, { useContext } from 'react'
import contextdata from './context'

const Part2 = () => {
  const {src}=useContext(contextdata)
  
  return (
    <>
    <div className='part2'>
     <img src={src} alt="....." />

    
    </div>
    </>
  )
}

export default Part2
