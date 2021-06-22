import { useState, useEffect } from "react"
import getSuperhero from "services/getSuperhero"
import ListSuperHero from "components/ListSuperHero"


export default function SearchResults({params}){
    const {keyword} = params
    const [isLoading, setIsLoading] = useState(true)
    const [superhero, setsuperhero] = useState()

    useEffect(()=>{
        setIsLoading(true)
        getSuperhero(keyword)
            .then(superhero => {
                setsuperhero(superhero)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(true)
            })
    },[keyword, setsuperhero])



    return (
        <div>
            {isLoading 
            ? <h3>Loading...</h3>
            : <ListSuperHero superhero={superhero}/>
            }
        </div>
    )
}