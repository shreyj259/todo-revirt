import React from 'react'

const Task = ({item,handleDelete,handleComplete}) => {
  return (
    <div className={`outer-box ${item.completed?"complete":""}`}>
        <div className="task-no">
            {item.id}
        </div>
        <div className="task-box">
            <div className="task-inner-box">
                {item.title}
            </div>
            <hr />
            <div className='task-inner-box'>
                <button className='complete-btn' onClick={()=>handleComplete(item)}>Mark as complete</button>
                <button className='delete-btn' onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
        </div>
    </div>
  )
}

export default Task;