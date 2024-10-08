import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])
  // fetch("http://localhost:3000/todos")
  //   .then(async function (res) {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   })  Infinite requests

  useEffect(() => {
    setInterval(fetchData, 10000);
  }, [])


  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const json = await response.json();
    setTodos(json.todos)
  }
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
