import React, { useContext } from 'react'
import contextdata from './context'

const Part3 = () => {
  const { data } = useContext(contextdata);

  return (
    < >
      <div className='part3'>

        { data }

      </div>
    </>
  )
}

export default Part3
