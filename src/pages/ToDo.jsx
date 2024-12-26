import { useContext } from "react";
import { CreateToDo } from "../components/CreateToDo"
import { ToDoDetails } from "../components/ToDoDetails"
import { TodoElement } from "../components/TodoElement"
import { ToDoListHeader } from "../components/ToDoListHeader"
import { ToDoList } from "../context/ToDoListContext";

export const ToDo = () => {
  const { filter, setFilter } = useContext(ToDoList)

  return (
    <div className="font-josefin-sans light:bg-gray-300 dark:bg-very-dark-blue min-h-screen">
      <div className="bg-mobile-dark md:bg-desktop-dark bg-cover bg-no-repeat h-[200px] md:h-[320px] w-full" />
      <div className="absolute top-0 left-0 right-0 px-4 md:px-0 flex flex-col items-center w-full">
        <div className="w-full max-w-md md:max-w-2xl mt-10 md:mt-20">
          <ToDoListHeader />
          <div className="space-y-10">
            <CreateToDo />
            <div className="w-full bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-lg shadow-lg overflow-hidden">
              <TodoElement />
              <ToDoDetails />
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-row justify-center space-x-3 mt-5 p-4 w-full max-w-md bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-lg shadow-lg overflow-hidden hover:cursor-pointer font-bold text-gray-500">
          <button
            className={`${filter === 'all' ? 'text-bright-blue' : 'text-gray-500 hover:text-white'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')} 
            className={`${filter === 'active' ? 'text-bright-blue' : 'text-gray-500 hover:text-white'}`}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')} 
            className={`${filter === 'completed' ? 'text-bright-blue' : 'text-gray-500 hover:text-white'}`}
          >
            Completed
          </button>
        </div>
        <div className="h-16 md:h-0" />
      </div>
    </div>
  )
}