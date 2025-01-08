import deepFreeze from "deep-freeze";
import anecdoteReducer from "./reducers/anecdoteReducer";

describe('anecdoteReducer', () =>{
    test('returns new state with action NEW_ANECDOTE', ()=>{
        const state = []
        const action = {
            // type: 'NEW_ANECDOTE',
            type:'anecdote/createAnecdote',
            payload:{
                content:'new anecdote',
                id: 1,
                votes:0
            }
        }
        deepFreeze(state)
        const newState  = anecdoteReducer(state, action)
        expect(newState).toHaveLength(1)
        // expect(newState).toContainEqual(action.payload)
        expect(newState.map(s=>s.content)).toContainEqual(action.payload)
    })

    test('returns new state with action VOTE',() =>{
        const state = [
            {
                content:'new anecdote',
                id: 1,
                votes:0
            }
        ]
        const action = {
            type:'anecdote/vote',
            payload:1 //direct if instead of object
        }
        deepFreeze(state)
        const newState = anecdoteReducer(state, action)
        expect(newState).toHaveLength(1)
        //option
        expect(newState[0].votes).toBe(1)

        // expect(newState).toContainEqual({
        //     content:'new anecdote',
        //     id: 1,
        //     votes:1
        // })
    })

    test('sort the anecdotes by votes',() =>{
        const state = [
            {
                content:'new anecdote',
                id: 1,
                votes:0
            },
            {
                content:'new anecdote 2',
                id: 2,
                votes:0
            }
        ]
        const action ={
            type:'anecdote/vote',
            payload:1 //direct if instead of object
        }
        deepFreeze(state)
        const newState = anecdoteReducer(state, action)
        expect(newState).toHaveLength(2)
        expect(newState[0].votes).toBe(1)
         
        //toContainEqual to compare one of elements in the array
        //toEqual to compare the whole array
        expect(newState).toEqual([
            {
            content:'new anecdote',
            id: 1,
            votes:1
        }
        ,
        {
            content:'new anecdote 2',
            id: 2,
            votes:0
        }
        ])
        })
})