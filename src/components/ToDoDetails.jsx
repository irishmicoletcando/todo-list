import { useContext } from "react";
import { ToDoList } from "../context/ToDoListContext";

export const ToDoDetails = () => {
  const { todoList } = useContext(ToDoList)

  return (
    <div className="flex flex-row justify-between px-6 py-4 text-sm text-gray-500 font-bold">
      <p>{todoList.length} items left</p>
      <div>
        <ul className="flex flex-row space-x-3 hover:cursor-pointer">
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </div>
      <button>Clear Completed</button>
    </div>
  )
}
