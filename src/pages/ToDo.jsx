import { CreateToDo } from "../components/CreateToDo"
import { TodoElement } from "../components/TodoElement"
import { ToDoListHeader } from "../components/ToDoListHeader"

export const ToDo = () => {
  return (
    <div className="font-josefin-sans bg-very-dark-blue h-lvh">
      <div className="bg-desktop-dark bg-cover bg-no-repeat h-[320px] w-full flex items-center justify-center">
        
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col sm: w-2/3 w-1/3 mt-20">
          <ToDoListHeader />
          <CreateToDo />
          <TodoElement />
        </div>
    </div>
  )
}
