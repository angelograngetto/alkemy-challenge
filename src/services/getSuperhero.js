import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
export default function getSuperhero(keyword = 'spider-man'){
    	

    const apiURL = `https://superheroapi.com/api/${API_KEY}/search/${keyword}`
    
    return axios.get(apiURL)
        .then((response) => {
            return response.data.results
        })
        .catch()
}