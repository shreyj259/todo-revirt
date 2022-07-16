import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Tasks from './components/Tasks';
import './components/app.css'

function App() {

  const [taskList,setTaskList]=useState();

  const handleSubmit=async (taskname)=>{
    const temp={
      userId:20,
      title:taskname,
      commpleted:false
    }
    const result=await axios.post("https://jsonplaceholder.typicode.com/todos",temp);
  }

  const fetchData=async()=>{
    const {data}= await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTaskList(data)
  }

  const handleDelete=async(id)=>{
    const result=await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  const handleComplete=async(item)=>{
    let temp=item;
    temp.completed=true;
    const result=await axios.patch(`https://jsonplaceholder.typicode.com/todos/${item.id}`,temp);
    console.log(result);
  }

  useEffect(()=>{
   fetchData();
  },[])

  return (
    <div className='container'>
    <div className="header">
      To-Do List
    </div>
     <Search handleSubmit={handleSubmit}/>
     <Tasks handleComplete={handleComplete} handleDelete={handleDelete} taskList={taskList}/>
    </div>
  );
}

export default App;
