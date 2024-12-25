import { useContext, useState } from "react"
import { ToDoList } from "../context/ToDoListContext"

export const CreateToDo = () => {
  const { todoList, setToDoList } = useContext(ToDoList)
  const [inputTodo, setInputTodo] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    setToDoList([
      ...todoList,
      inputTodo
    ])
    setInputTodo("")
  }

  return (
      <form onSubmit={addTodo} className="w-full relative mb-10 mx-auto">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pl-2">
            <div className="relative w-5 h-5 rounded-full border-2 border-gray-600"></div>
        </div>
        <input
          type="text" 
          value={inputTodo}
          onChange={(e)=> {setInputTodo(e.target.value)}}
          placeholder="Create a new todo..."
          className="text-gray-300 text-lg w-full px-14 py-4 rounded-lg bg-very-dark-desaturated-blue placeholder-gray-400 focus:outline-none"
        />
      </form>
  )
}
