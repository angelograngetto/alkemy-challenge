import {useState} from 'react'
import {useLocation} from 'wouter'

export default function SearchForm(){
    const [path, pushLocation] = useLocation()
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (evt) =>{
        setKeyword(evt.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                value={keyword}
                type="text" 
                className="form-control" 
                placeholder="Search your superhero here..."
            />
        </form>
    )
}