import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
// if the name is same, "{}" is needed 
import {voteAnecdote} from '../reducers/anecdoteReducer'
import { setNotificationTime } from "../reducers/notificationReducer";

const AnecdoteList = () =>{
    const dispatch = useDispatch()
    //or useSelector(({anecdote, filter}) => {})
        const anecdotes = useSelector(({ anecdote, filter }) => {
            if (!filter){ 
                return anecdote
            }
            return anecdote.filter((anecdote) =>
              anecdote.content.toLowerCase().includes(filter.toLowerCase())
            )
          })
    
    
    const handleAnecdote = (anecdote) =>{
        dispatch(voteAnecdote(anecdote))
        dispatch(setNotificationTime(`You voted for "${anecdote.content}"`,5))
    }

    const sortedAnecdotes = [...anecdotes].sort((a,b)=>b.votes - a.votes)
    return(
        <div>
            {sortedAnecdotes.map(anecdote =>(
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => handleAnecdote(anecdote)}>vote</button>
                </div>
                </div>
            ))}
        </div>   
    )
}
export default AnecdoteList