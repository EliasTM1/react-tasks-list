import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showTask, setShowTask] = useState(false)
    const [tasks, setTasks] = useState([{
            id: 0,
            text: 'Apt',
            day: 'Apr 20 at 4:20',
            reminder: true
        },
        {
            id: 1,
            text: 'Apt 1',
            day: 'Apr 20 at 4:20',
            reminder: false
        },
        {
            id: 2,
            text: 'Apt 2',
            day:'Apr 20 at 4:20',
            reminder: true
        },
        {
            id: 3,
            text: 'Apt 3',
            day: 'Apr 20 at 4:20',
            reminder: false
        },
    ])

    // ADD TASKS
const addTask = (task) => {
  let id = Math.floor(Math.random() *10000) + 1
  const newTask =  {id, ...task}
  setTasks([...tasks , newTask])
}

    // Delete a Task

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) =>
            task.id !== id
        ))
    }

    // toggle the class
    const toggleReminder = (id) => {
        
         setTasks(tasks.map((task) => task.id === id ? { ...task , reminder: !task.reminder } : task))
        
    }

    return ( <div className = "App container" >
        <div >
        <Header onAdd={() => setShowTask(!showTask)} showAdd={showTask}/ > 
        {showTask && <AddTask onAdd={addTask} />}
        {
            tasks.length > 0 ? <Tasks tasks = { tasks }
            onDelete = { deleteTask }
            onToggle={toggleReminder}
            /> : 'Theres No Tasks To Show'} 
            </div> 
          </div>
        );
}

export default App