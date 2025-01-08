//install json-server for the project
// npm install json-server --save-dev

// launch json-server with the command npm run server
import ReactDOM from 'react-dom/client'
// import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import store from './store'
//npm install @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
import App from './App'

import anecdoteService from './services/anecdotes'
import reducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import { appendAnecdote } from './reducers/anecdoteReducer'
import anecdotes from './services/anecdotes'


// const CombineReducers = combineReducers({
//   anecdote:reducer,
//   filter:filterReducer
// })

// const store = createStore(CombineReducers)

// const store = configureStore({
//   reducer:{
//     anecdote: reducer,
//     filter: filterReducer,
//     notification: notificationReducer
//   }
// })

// anecdoteService.getAll().then(anecdotes =>{
//   // anecdotes.forEach(anecdote =>{
//   //   store.dispatch(appendAnecdote(anecdote))
//   // })
//   store.dispatch(setAnecdotes(anecdotes))
// })





ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)