import { useLocation } from "wouter"
export default function IsLogged(){
    const [path, pushLocation] = useLocation()

    if(localStorage.getItem('tkn') === null) pushLocation('/login')

}