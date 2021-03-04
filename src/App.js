import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {

  const [showAddTaks, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctor appointment', 
        day: 'Feb 5th at 2:30pm', 
        reminder: true,
    },
    {
        id: 2, 
        text: 'Meeting at School', 
        day: 'Jan 8th at 2:30pm', 
        reminder: true,
    },
    {
        id: 3, 
        text: 'Food Shoping', 
        day: 'March 12th at 2:30pm', 
        reminder: false,
    },
])

// Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTaks)}
          showAdd={showAddTaks}/>
        {showAddTaks && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
          'No Tasks to show')}
    </div>
  )
} 



export default App;
