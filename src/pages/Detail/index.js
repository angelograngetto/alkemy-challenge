import {useEffect, useState} from 'react'
import getSingleSuperhero from 'services/getSingleSuperhero'
import Loader from 'components/Loader'

export default function Detail({params}){
    const {id} = params
    const [hero, setHero] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(function() {
        setLoading(true)
        getSingleSuperhero(id).then(result => {
            setHero([result])
            setLoading(false)
        }).catch(error => console.log(error))
    },[id])

    if (loading) return <Loader/>

    return(
        <div>
            
            <div className="container">
                
                    {hero.map(superhero => (
                        <div className="row mb-5">
                            <h2 className="border-bottom pb-2 text-center">{superhero.name}</h2>
                            <img className="img-fluid rounded d-block m-auto mt-5 mb-5 " style={{width: '20rem',height: '20rem', objectFit: 'cover'}} src={superhero.image.url} alt="" />
                            <h3 className="border-bottom pb-2">Biography</h3>
                            <p className="m-0"><b>Fullname</b>: {superhero.biography['full-name']}</p>
                            <p className="m-0"><b>Place of birth</b>: {superhero.biography['place-of-birth']}</p>
                            <p className="m-0"><b>Alignment</b>: {superhero.biography['alignment']}</p>
                            <p className="m-0"><b>Work</b>: {superhero.work.occupation}</p>
                            <h3 className="border-bottom mt-3 pb-2">Appearance</h3>
                            <p className="m-0"><b>Gender</b>: {superhero.appearance.gender}</p>
                            <p className="m-0"><b>Race</b>: {superhero.appearance.race}</p>
                            <p className="m-0"><b>Height</b>: {superhero.appearance.height[1]}</p>
                            <p className="m-0"><b>Weight</b>: {superhero.appearance.weight[1]}</p>
                            <p className="m-0"><b>Eye color</b>: {superhero.appearance['eye-color']}</p>
                            <p className="m-0"><b>Hair color</b>: {superhero.appearance['hair-color']}</p>
                            <h3 className="border-bottom mt-3 pb-2">Powerstats</h3>
                            <p className="m-0"><b>Intelligence</b>: {superhero.powerstats.intelligence}</p>
                            <p className="m-0"><b>Strength</b>: {superhero.powerstats.strength}</p>
                            <p className="m-0"><b>Speed</b>: {superhero.powerstats.speed}</p>
                            <p className="m-0"><b>Durability</b>: {superhero.powerstats.durability}</p>
                            <p className="m-0"><b>Power</b>: {superhero.powerstats.power}</p>
                            <p className="m-0"><b>Combat</b>: {superhero.powerstats.combat}</p>
                        </div>
                    ))}
                
            </div>
        </div>
    )
}