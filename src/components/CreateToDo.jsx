import { useState } from "react"

export const CreateToDo = () => {
  const [todoList, setToDoList] = useState([])
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
    <div>
      <input
        type="text" 
        value={inputTodo}
        onChange={(e)=> {setInputTodo(e.target.value)}}
        className="bg-light-gray h-10 min-w-[500px] mr-3 p-2"
      />
      <button className="bg-dark-gray text-white py-2 px-4 rounded-3xl" onClick={addTodo}>Submit</button>

      <ul>
        {todoList.map((todo) => (
          <li key={Math.random()}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
