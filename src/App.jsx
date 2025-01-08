
// rm -rf .git :remove the git configuration 
//npm install
import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList.jsx'
import AnecdoteForm from './components/AnecdoteForm.jsx'
import Filter from './components/Filter.jsx'
import Notification from './components/Notification.jsx'
import anecdoteService from './services/anecdotes.js'
import { setAnecdotes } from './reducers/anecdoteReducer.js'
import { useDispatch } from 'react-redux'
import anecdotes from './services/anecdotes.js'

import { initializeAnecdotes } from './reducers/anecdoteReducer.js'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() =>{
  //   anecdoteService.getAll().then(anecdotes=> dispatch(setAnecdotes(anecdotes)))
  // }, [])
    dispatch(initializeAnecdotes()) 
  },[])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />


      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App