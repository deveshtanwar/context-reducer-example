import React from 'react'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <div style={{ textAlign: 'center' }}>Todo App using Context API and useReducer hook</div>
      <AddTodo />
      <ListTodo />
    </TodoProvider>
  )
}

export default App