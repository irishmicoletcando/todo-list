import { useContext } from "react";
import { ToDoList } from "../context/ToDoListContext";

export const ToDoDetails = () => {
  const { todoList, setToDoList, filter, setFilter,  filteredTodos } = useContext(ToDoList)

  const clearCompleted = (id) => {
    setToDoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div className="flex flex-row justify-between px-6 py-4 text-sm  font-bold text-gray-500">
      <p>{filteredTodos.length} items left</p>
      <div className="flex flex-row space-x-3 hover:cursor-pointer">
        <button
          className={`${filter === 'all' ? 'text-bright-blue' : 'text-gray-500'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')} 
          className={`${filter === 'active' ? 'text-bright-blue' : 'text-gray-500'}`}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={`${filter === 'completed' ? 'text-bright-blue' : 'text-gray-500'}`}
        >
          Completed
        </button>
      </div>
      <button className="hover:text-white" onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}
