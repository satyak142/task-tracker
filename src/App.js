import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id:1,
      title:'First',
      date:'21-2-22',
      remainder:true
  },
  {
      id:2,
      title:'Second',
      date:'1-12-23',
      remainder:true
  },
  {
      id:3,
      title:'Third',
      date:'11-5-21',
      remainder:false
  }
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newtask = {id, ...task};
    setTasks([...tasks, newtask]);
  } 
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter( task => task.id !== id))
  }
  // Toggle remainder
  const toggleRemainder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, remainder:!task.remainder}: task))
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />) : ('No Tasks to show!')}
    </div>
  );
}

export default App;
