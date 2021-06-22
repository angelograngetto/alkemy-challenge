import { useEffect, useState, useContext } from "react"
import {useLocation} from 'wouter'
import getSingleSuperhero from 'services/getSingleSuperhero'
import TeamContext from 'context/TeamContext'
import Loader from 'components/Loader'

export default function Hero({id}){

    const [isLoading, setIsLoading] = useState(true)
    const [superhero, setsuperhero] = useState()
    const {team,setTeam} = useContext(TeamContext)
    const [path, pushLocation] = useLocation()

    useEffect(function(){
        setIsLoading(true)
        getSingleSuperhero(id)
            .then(superhero => {
                setsuperhero(superhero)
                setIsLoading(false)
            })
    }, [id])

    const handleDelete = (id) => {
        setTeam( team.filter((team) => {
            return team.hero.id !== id
        }))
    }

    const handleDetails = (id) =>{
        pushLocation(`/detail/${id}`)
    }

    return(

        <div>
            {isLoading
            ? <Loader/>
            : 
                <div className="row align-items-center border-bottom mt-3 pb-3">
                    <div className="col-sm-2 col-md-2 text-center align-items-center">
                        <img className="img-fluid rounded d-block m-auto text-center" style={{width: '5rem',height: '5rem', objectFit: 'cover'}} src={superhero.image.url} alt={superhero.name} />
                        <small className="m-0">{superhero.biography.alignment}</small>
                    </div>
                    <div className="col-sm-2 text-center">
                        <h4 className="m-0">{superhero.name}</h4>
                        <p className="m-0">{superhero.biography['full-name']}</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5 className="">Powerstats</h5>
                        <p className="m-0">Intelligence: {superhero.powerstats.intelligence}</p>
                        <p className="m-0">Strength: {superhero.powerstats.strength}</p>
                        <p className="m-0">Speed: {superhero.powerstats.speed}</p>
                        <p className="m-0">Durability: {superhero.powerstats.durability}</p>
                        <p className="m-0">Power: {superhero.powerstats.power}</p>
                        <p className="m-0">Combat: {superhero.powerstats.combat}</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <button onClick={() => handleDetails(superhero.id)}className="btn btn-primary m-1">Details</button>
                        <button onClick={() => handleDelete(superhero.id)}className="btn btn-danger m-1">Delete</button>
                    </div>
                </div>
            
            }
        </div>
    )
}