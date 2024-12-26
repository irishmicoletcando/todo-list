import { useState } from 'react'
import { ToDo } from './pages/ToDo'
import { ToDoList } from './context/ToDoListContext'

export default function App() {
  const [todoList, setToDoList] = useState([])

  return (
    <ToDoList.Provider value={{todoList, setToDoList }}>
      <ToDo />
    </ToDoList.Provider>
  )
}