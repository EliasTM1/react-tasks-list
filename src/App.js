import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from  'react'
function App() {
  const [tasks , setTasks] = useState([
    {
      id:0,
      text: 'Apt',
      day: Date.now(),
      reminder: true
    },
    {
      id:1,
      text: 'Apt 1',
      day: Date.now(),
      reminder: true
    },
    {
      id:2,
      text: 'Apt 2',
      day: Date.now(),
      reminder: true
    },
    {
      id:3,
      text: 'Apt 3',
      day: Date.now(),
      reminder: true
    },
  ])
    return ( 
    <div className = "App container" >
        <div >
        <Header />
        <Tasks tasks={tasks} />
        </div> 
    </div>
    );
}

export default App;