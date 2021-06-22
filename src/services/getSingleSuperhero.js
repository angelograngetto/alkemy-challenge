import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

export default function getSingleSuperhero(id){
    
    const apiURL = `https://superheroapi.com/api/${API_KEY}/${id}`
    
    return axios.get(apiURL)
        .then((response) => {
            return response.data
        })
}