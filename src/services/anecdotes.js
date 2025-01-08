// npm install axios
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content)=>{
    const object = {content, votes:0}
    const response = await axios.post(baseUrl, object)
    return response.data
}
const updateAnecdotethroughVote = async (anecdote) =>{
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1, // Increment votes
      };
      const response = await axios.put(`${baseUrl}/${anecdote.id}`, updatedAnecdote);
      return response.data;
    };


export default { getAll, createAnecdote, updateAnecdotethroughVote}