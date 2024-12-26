import { useState } from "react"

export const TodoElement = () => {
  // const { todoList } = useContext(ToDoList)
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false }
  ]);

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
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <ul className="divide-y divide-gray-700">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center px-6 py-4 group cursor-pointer"
            onClick={() => toggleCompleted(todo.id)}
          >
            <div className={`
              relative w-5 h-5 rounded-full border-2 
              ${todo.completed 
                ? 'bg-gradient-to-br from-blue-400 to-purple-400 border-none' 
                : 'border-gray-600'
              }
              mr-4 flex-shrink-0
            `}>
              {todo.completed && <CheckIcon />}
            </div>
            <span className={`
              text-lg
              ${todo.completed 
                ? 'text-gray-500 line-through' 
                : 'text-gray-300'
              }
            `}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <hr className="border-gray-700"/>
    </div>
  )
}