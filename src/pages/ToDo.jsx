import { CreateToDo } from "../components/CreateToDo"
import { ToDoDetails } from "../components/ToDoDetails"
import { TodoElement } from "../components/TodoElement"
import { ToDoListHeader } from "../components/ToDoListHeader"

export const ToDo = () => {
  return (
    <div className="font-josefin-sans light:bg-gray-300 dark:bg-very-dark-blue h-lvh">
      <div className="bg-desktop-dark bg-cover bg-no-repeat h-[320px] w-full flex items-center justify-center">
        
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col sm:w-full max-w-2xl mt-20">
          <ToDoListHeader />
          <CreateToDo />
          <div className="w-full max-w-2xl mx-auto bg-very-light-gray dark:bg-very-dark-desaturated-blue rounded-lg">
            <TodoElement />
            <ToDoDetails />
          </div>
        </div>
    </div>
  )
}
