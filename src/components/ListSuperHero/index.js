import {useContext} from 'react'
import {useLocation} from 'wouter'
import getSingleSuperhero from 'services/getSingleSuperhero'
import TeamContext from 'context/TeamContext'

export default function ListSuperHero({superhero}){

    const [path, pushLocation] = useLocation()
    const {team,setTeam} = useContext(TeamContext)

    const handleAdd = (id) =>{
        let good = 0
        let bad = 0

        if(team.length === 6){
            alert('Your team is completed.')
            return null
        }

        team.forEach(team => {
            team.hero.biography.alignment === "good" ? good++ : bad++
        })


        getSingleSuperhero(id).then(hero => {
            const exists = team.filter(team => team.hero.id === id)
            if(exists.length === 0){
                if(hero.biography.alignment === "good" && good === 3){
                    alert('You already 3 goods heroes')
                    return null
                }else if(hero.biography.alignment === "bad" && bad === 3){
                    alert('You already 3 bad heroes')
                    return null
                }
                setTeam([...team, {hero}])
                pushLocation('/')
            }else{
                alert('This hero is already in your team.')
                return null
            }
        })

    }

    return (
        <div className="container text-center">
            <div className="row">
            {superhero.map(superhero => (
                <div className="card m-1 p-0 mx-auto" style={{maxWidth: "15rem"}} key={superhero.id}>
                    <img src={superhero.image.url} className="card-img-top" alt={superhero.name} />
                    <div className="card-body">
                        <h5 className="card-title">{superhero.name}</h5>
                        <p className="card-text">{superhero.biography['full-name']}</p>
                        <button onClick={() => handleAdd(superhero.id)} className="btn btn-success">Add</button>
                    </div> 
                </div>
            ))}
            </div>
        </div>
    )
}