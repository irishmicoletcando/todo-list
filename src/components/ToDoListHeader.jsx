import lightThemeIcon from "../assets/icon-sun.svg"
import darkThemeIcon from "../assets/icon-moon.svg"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const ToDoListHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="font-bold text-white text-4xl tracking-[.5em]">TODO</h1>
      <button onClick={toggleTheme}>
        <img 
          src= {theme === 'light' ? darkThemeIcon : lightThemeIcon}
        />
      </button>
    </div>
  )
}
