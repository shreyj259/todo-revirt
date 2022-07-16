import React, { useState } from 'react'

const Search = ({handleSubmit}) => { 

  const [barValue,setBarValue]=useState();

  return (
    <>
    <div className="subtext">
        Add a new task in the list
    </div>
    <div> 
        <input placeholder='Enter the task here' className='text-bar' value={barValue} onChange={(e)=>setBarValue(e.target.value)} type="text" />
        <button className='submit-btn' onClick={()=>handleSubmit(barValue)} >Submit</button>
    </div>

    </>
  )
}

export default Search