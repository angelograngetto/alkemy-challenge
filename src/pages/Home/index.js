import SearchForm from "components/SearchForm"
import ListTeam from 'components/ListTeam'
import TotalPowerstats from "components/TotalPowerstats"

export default function Home(){

    return(
        <div>
            <SearchForm/>
            <h3>Total powerstats</h3>
            <TotalPowerstats/>
            <h3>Your team</h3>
            <ListTeam/>
        </div>
    )
}