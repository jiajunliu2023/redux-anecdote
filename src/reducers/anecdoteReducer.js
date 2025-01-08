import { createSlice } from '@reduxjs/toolkit'
import anecdoteServices from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name:'anecdote',
  initialState : [],
  reducers:{
    vote: (state, action)=>{
      console.log("1",action.payload)
      const id  = action.payload;
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : {...anecdote, votes: anecdote.votes + 1}
      )
    },

    createAnecdote : (state, action)=>{
      const content = action.payload
      // return [...state, action.payload]
      state.push(content)
      // state.push({
      //   content,
      //   id: getId(),
      //   votes:0
      // })
    },

    appendAnecdote: (state, action) =>{
      state.push(action.payload)
    },
    setAnecdotes: (state, action) =>{
      return action.payload
    }
  }
})

// const anecdoteReducer = (state = initialState, action)=>{
//   switch(action.type){
//     case 'VOTE':
//       return state.map(anecdote =>
//         anecdote.id !== action.payload.id ? anecdote : {...anecdote, votes: anecdote.votes + 1}

//       ).sort((a,b) => b.votes - a.votes)
    
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload].sort((a,b) => b.votes - a.votes)
//     default:
//       return state
//   }

// }

// Action creators
// export const vote = (id) =>{
//   return {
//     type:'VOTE',
//     payload:{id}
//   }
// }

// export const createAnecdote = (content)=>{
//   return {
//     type:'NEW_ANECDOTE',
//     payload:{
//       content,
//       id:getId(),
//       votes:0
//     }
//   }
// }



const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  return state
}

export const { vote,  appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () =>{
  return async dispatch =>{
    const anecdotes = await anecdoteServices.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content =>{
  return async dispatch =>{
    const newAnecdote = await anecdoteServices.createAnecdote(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const voteAnecdote = anecdote =>{
  return async dispatch =>{
    const updatedAnecdote = await anecdoteServices.updateAnecdotethroughVote(anecdote)
    dispatch(vote(updatedAnecdote.id))
  }
}
export default anecdoteSlice.reducer