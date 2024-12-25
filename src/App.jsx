import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { ToDo } from './pages/ToDo'
import { ToDoList } from './context/ToDoListContext'
import { supabase } from './services/supabaseClient'

export default function App() {
  const [session, setSession] = useState(null)
  const [todoList, setToDoList] = useState([])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
      <ToDoList.Provider value={{todoList, setToDoList }}>
        <ToDo />
      </ToDoList.Provider>
    )
  }
}