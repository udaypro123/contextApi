import React, { useContext } from 'react'
import contextdata from './context'

const Part5 = () => {
  const {data} =useContext(contextdata)

  return (
    < >
    <div className='part5'>
        {data}
    </div>
    </>
  )
}

export default Part5
