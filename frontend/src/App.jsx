import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <CreateTodo></CreateTodo>
    <Todos todos = {
      [
        {
          title : "Go to Gym",
          description : "Go daily for two hours",
          completed: false
        },
        {
          title : "Go to Gym",
          description : "Go daily for two hours",
          completed: false
        }
      ]
    }></Todos>
  </div>
  )
}

export default App
