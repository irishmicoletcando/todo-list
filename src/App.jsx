import { useState, useEffect } from 'react'
import { ToDo } from './pages/ToDo'
import { ToDoList } from './context/ToDoListContext'
import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [todoList, setToDoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    return saved ? JSON.parse(saved) : [];
  });
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    const storedToDoList = JSON.parse(localStorage.getItem("todoList")) || [];
    setToDoList(storedToDoList);
  }, []);

  useEffect(() => {
    if (todoList.length > 0 || localStorage.getItem("todoList")) {
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }
  }, [todoList]);

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