import axios from 'axios'

export default function loginService(email,password){
    console.log(email)
    console.log(password)
    return axios.post('http://challenge-react.alkemy.org/',{
        email,
        password
    }).then( response => {
        localStorage.setItem('tkn', response.data.token)
        return response
    }).catch(error => {
        throw new Error('Error')
    })
}