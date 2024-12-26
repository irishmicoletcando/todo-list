import { useContext } from "react"
import deleteIcon from "../assets/icon-cross.svg"
import { ToDoList } from "../context/ToDoListContext"

export const TodoElement = () => {
  const { todoList, setToDoList, filteredTodos } = useContext(ToDoList)

  const CheckIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="11" 
      height="9" 
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <path 
        fill="none" 
        stroke="#FFF" 
        strokeWidth="2" 
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  );

  const toggleCompleted = (id) => {
    setToDoList(todoList.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setToDoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <ul className="divide-y divide-gray-700">
        {filteredTodos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center px-6 py-4 group cursor-pointer"
          >
            <div className={`
              relative w-5 h-5 rounded-full border-2 
              ${todo.completed 
                ? 'bg-gradient-to-br from-blue-400 to-purple-400 border-none' 
                : 'border-gray-600'
              }
              mr-4 flex-shrink-0
            `}
              onClick={() => toggleCompleted(todo.id)}
            >
              {todo.completed && <CheckIcon />}
            </div>
            <div className="flex justify-between w-full">
              <span className={`
                text-lg
                ${todo.completed 
                  ? 'text-gray-300 dark:text-gray-500 line-through' 
                  : 'text-gray-500 dark:text-gray-300'
                }
              `}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img src={deleteIcon} alt="delete-icon"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr className="border-gray-700"/>
    </div>
  )
}