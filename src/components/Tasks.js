import React, { useState } from 'react'
import Task from './Task'

const Tasks = ({taskList,handleDelete,handleComplete}) => {

  const [selector,setSelector]=useState("true");

  return (
    <>
    <div className="subtext">
        Added task in to-do list
    </div>
    <div className="selector-box">
      <select onChange={(e)=>setSelector(e.target.value)}>
      <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Pending</option>
      </select>
    </div>
    <div className="tasks-container">
        {taskList && taskList.filter(item=>{
          if(selector=="all")
          return item;
          else if(item.completed.toString()==selector)
          return item;
        }).slice(0,50).map(item=><Task handleComplete={handleComplete} handleDelete={handleDelete} item={item}/>)}
    </div>
    </>
  )
}

export default Tasks