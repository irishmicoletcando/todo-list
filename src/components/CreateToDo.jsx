import { useContext, useState, useEffect } from "react"
import { ToDoList } from "../context/ToDoListContext"

export const CreateToDo = () => {
  const { todoList, setToDoList } = useContext(ToDoList)
  const [inputTodo, setInputTodo] = useState("")
  const [nextToDoId, setNextToDoId] = useState(() => {
    const saved = localStorage.getItem("nextToDoId");
    return saved ? parseInt(saved) : 1;
  })

  useEffect(() => {
    localStorage.setItem("nextToDoId", nextToDoId.toString());
  }, [nextToDoId]);

  const addTodo = (e) => {
    e.preventDefault();
    setToDoList([
      ...todoList,
      {
        id: nextToDoId, 
        text: inputTodo.trim(),
        completed: false, 
      }
    ]);
    setInputTodo(""); 
    setNextToDoId(nextToDoId + 1)
  };

  return (
      <form onSubmit={addTodo} className="w-full max-w-2xl relative mx-auto">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pl-2">
            <div className="relative w-5 h-5 rounded-full border-2 border-gray-600"></div>
        </div>
        <input
          type="text" 
          value={inputTodo}
          onChange={(e)=> {setInputTodo(e.target.value)}}
          placeholder="Create a new todo..."
          className="text-gray-500 dark:text-gray-300 text-lg w-full px-14 py-4 rounded-lg light:bg-very-light-gray dark:bg-very-dark-desaturated-blue placeholder-gray-400 focus:outline-none"
        />
      </form>
  )
}
