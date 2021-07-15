import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false) // a boolean state

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'LeetCode Practice',
        date: 'July 5th All Day',
        reminder: false,
    },
    {
        id: 2,
        text: 'JavaScript and React Crash Course',
        date: 'July 6th at 3:00pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'TCS Technical Interview',
        date: 'July 10th at 12:00pm',
        reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task ) ) // if id matches, leave everything same but change reminder, otherwise leave as "task"
  }

  return (
    <div className="container">

      <Header showAddForm={() => setShowAddTask(!showAddTask)}
        showingAddButton={showAddTask}/>

      {/* this statement means AddTask will only show when showAddTask is true */}
      {showAddTask && <AddTask onAdd={addTask}/>} 

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks Yet!'
      )}
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class!</h1>
//   }
// }

export default App;
