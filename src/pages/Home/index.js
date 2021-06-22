import ListTeam from 'components/ListTeam'
import TotalPowerstats from "components/TotalPowerstats"
import isLogged from 'hooks/IsLogged'
import SearchForm from 'components/SearchForm'
export default function Home(){

    isLogged()

    return(
        <div className="container">
            <SearchForm/>
        <div className="container-fluid">
            <div className="row m-4">
                <div className="col-sm-4 m-1 border p-2 rounded team-info" >
                    <h3 className="text-center pb-2 border-bottom ">Team info</h3>
                    <TotalPowerstats/>
                </div>
                <div className="col-sm-7 m-1 pt-2 border rounded">
                    <h3 className="text-center pb-2 border-bottom ">Your team</h3>
                    <ListTeam/>
                </div>
            </div>
        </div>
        </div>
    )
}