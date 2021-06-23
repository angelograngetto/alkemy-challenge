import { useState, useEffect } from "react"
import getSuperhero from "services/getSuperhero"
import ListSuperHero from "components/ListSuperHero"
import Loader from 'components/Loader'
import IsLogged from "middleware/IsLogged"
import SearchForm from 'components/SearchForm'


export default function SearchResults({params}){

    IsLogged()
    const {keyword} = params
    const [isLoading, setIsLoading] = useState(true)
    const [superhero, setsuperhero] = useState()
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        setIsError(false)
        getSuperhero(keyword)
            .then(superhero => {
                console.log(superhero)
                if(superhero === undefined) setIsError(true)
                setsuperhero(superhero)
                setIsLoading(false)
            })
            .catch(error => {
                setIsError(true)
                setIsLoading(false)
            })
    },[keyword, setsuperhero])

    if(isError) return <h3 className="text-center">¡Oops! 0 results for {decodeURI(keyword)}</h3>

    return (
        <div>
            {isLoading 
            ? <Loader/>
            : <div className="container">
                <SearchForm/>
                <ListSuperHero superhero={superhero}/>
              </div>
            }
        </div>
    )
}