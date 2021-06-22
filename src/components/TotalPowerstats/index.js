import {useState, useContext, useEffect} from 'react'
import TeamContext from 'context/TeamContext'


const INITIAL_POWERSTATS = [
    {
        type: "Intelligence",
        cant: 0
    },
    {
        type: "Strength",
        cant: 0
    },
    {
        type: "Speed",
        cant: 0
    },
    {
        type: "Durability",
        cant: 0
    },
    {
        type: "Power",
        cant: 0
    },
    {
        type: "Combat",
        cant: 0
    }
    ]

/* In this component i calculate the total powerstats, physicals details and the total heroes in the team */

export default function TotalPowerstats(){
    const {team} = useContext(TeamContext)
    const [physical, setPhysical] = useState([0,0])
    const [total, setTotal] = useState([0,0])
    const [powerstats, setPowerstats] = useState(INITIAL_POWERSTATS)

        useEffect(()=>{
            let intelligence = 0
            let strength = 0
            let speed = 0
            let durability = 0
            let power = 0
            let combat = 0
            let weight = 0
            let height = 0
            let good = 0
            let bad = 0
            console.log("useeffect")
                console.log(team)
                team.forEach(team => {
                    intelligence += parseInt(team.hero.powerstats.intelligence)
                    strength += parseInt(team.hero.powerstats.strength)
                    speed += parseInt(team.hero.powerstats.speed)
                    durability += parseInt(team.hero.powerstats.durability)
                    power += parseInt(team.hero.powerstats.power)
                    combat += parseInt(team.hero.powerstats.combat)
                    weight += parseInt(team.hero.appearance.weight[1])
                    height += parseInt(team.hero.appearance.height[1])
                   if (team.hero.biography.alignment === "good") good++
                   if (team.hero.biography.alignment === "bad") bad++
                })
                setPowerstats([
                    {
                        type: "Intelligence",
                        cant: intelligence
                    },
                    {
                        type: "Strength",
                        cant: strength
                    },
                    {
                        type: "Speed",
                        cant: speed
                    },
                    {
                        type: "Durability",
                        cant: durability
                    },
                    {
                        type: "Power",
                        cant: power
                    },
                    {
                        type: "Combat",
                        cant: combat
                    }
                ])
                if (weight !== 0) weight = weight/team.length
                
                if (height !== 0) height = height/team.length
                
                setPhysical([weight,height])
                setTotal([good,bad])
        }, [team])


    return(
        <div>
        {
            /* Sort from highest to lowest */
            powerstats.sort((a, b) => (a.cant < b.cant ? 1 : a.cant > b.cant ? -1 : 0)).map((powerstat) => (
                <p className="m-0">⭐ <b>{powerstat.type}</b>: {powerstat.cant}</p>
               ))
        }
            <p className="m-0"><b>Average height</b>: {physical[0]}kg</p>
            <p className="m-0"><b>Average weight</b>: {physical[1]}cm</p>
            <p className="m-0"> <b>Good heroes</b>: {total[0]}/3 </p> 
            <p className="m-0"><b>Bad heroes</b>: {total[1]}/3 </p> 
            <p className="m-0"><b>Total heroes</b>: {parseInt(total[0])+parseInt(total[1])}/6</p>
        </div>
    )
}