import React, { useContext } from 'react'
import contextdata from './context'

const Part1 = () => {
  const {value,setvalue,setdata}=useContext(contextdata);
  
  return (
    <>
    <div className='part1'>
      <input type="text" value={value} onChange={(e)=>{
        setvalue(e.target.value)
      }}/>

      <button onClick={()=>{
        setdata(value)
      }}>send data part1 to part3,part4,part5</button>
    </div>
    </>
  )
}

export default Part1
