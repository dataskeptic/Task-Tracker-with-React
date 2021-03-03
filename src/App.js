import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

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

  return (
    <div className="container">
        <Header />
        <Tasks tasks={tasks}/>
    </div>
  )
} 



export default App;
