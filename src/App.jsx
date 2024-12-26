import { useState, useEffect } from 'react'
import { ToDo } from './pages/ToDo'
import { ToDoList } from './context/ToDoListContext'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [todoList, setToDoList] = useState([])
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}} >
      <ToDoList.Provider value={{todoList, setToDoList }}>
        <ToDo />
      </ToDoList.Provider>
    </ThemeContext.Provider>
  )
}