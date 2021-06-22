import { useEffect, useState, useContext } from "react"
import getSingleSuperhero from 'services/getSingleSuperhero'
import TeamContext from 'context/TeamContext'

export default function Hero({id}){

    const [isLoading, setIsLoading] = useState(true)
    const [superhero, setsuperhero] = useState()
    const {team,setTeam} = useContext(TeamContext)

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

    return(

        <div>
            {isLoading
            ? <h1>Loading</h1>
            : 
                <div className="row align-items-center border">
                    <div className="col-sm-2">
                        <img className="img-fluid img-thumbnail rounded-circle" style={{width: '5rem',height: '5rem', objectFit: 'cover'}} src={superhero.image.url} alt={superhero.name} />
                    </div>
                    <div className="col-sm-2">
                        <h4 className="m-0">{superhero.name}</h4>
                        <p>{superhero.biography['full-name']}</p>
                    </div>
                    <div className="col-sm-6">
                        <h5>Powerstats</h5>
                        <p className="m-0">Intelligence: {superhero.powerstats.intelligence}</p>
                        <p className="m-0">Strength: {superhero.powerstats.strength}</p>
                        <p className="m-0">Speed: {superhero.powerstats.speed}</p>
                        <p className="m-0">Durability: {superhero.powerstats.durability}</p>
                        <p className="m-0">Power: {superhero.powerstats.power}</p>
                        <p className="m-0">Combat: {superhero.powerstats.combat}</p>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-primary mb-2">Details</button>
                        <button onClick={() => handleDelete(superhero.id)}className="btn btn-danger">Delete</button>
                    </div>
                </div>
            
            }
        </div>
    )
}