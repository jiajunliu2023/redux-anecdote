import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationTime } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = () =>{
    // const anecdotes = useSelector(state => state.anecdote)
    const dispatch = useDispatch()
    
    const CreateAnecdote = async (event) =>{
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        // const newAnecdote = await anecdoteService.createAnecdote(content)
        dispatch(createAnecdote(content))
        dispatch(setNotificationTime(`You created a new anecdote "${content}`, 5))
    }

    return (
        <div>
            <form onSubmit={CreateAnecdote}>
                
                <input name="anecdote" />
                
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
