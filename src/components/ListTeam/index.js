import {useContext} from 'react'
import Hero from 'components/Hero'
import TeamContext from 'context/TeamContext'

export default function ListTeam(){

    const {team} = useContext(TeamContext)

    if(team.length === 0) return <p>You don't have superheroes in your team</p>

    return(
        <div>
            { team.map(team => (
                <Hero key={team.hero.id} id={team.hero.id}/>    
            ))}
        </div>
    )
}