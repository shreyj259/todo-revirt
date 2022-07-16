import React from 'react'
import Task from './Task'

const Tasks = ({taskList,handleDelete,handleComplete}) => {
  return (
    <>
    <div className="subtext">
        Added task in to-do list
    </div>
    <div className="tasks-container">
        {taskList && taskList.slice(0,50).map(item=><Task handleComplete={handleComplete} handleDelete={handleDelete} item={item}/>)}
    </div>
    </>
  )
}

export default Tasks