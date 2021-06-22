import React, {useState} from 'react'

const Context = React.createContext({})

export function TeamContextProvider({children}){
    const [team, setTeam] = useState([])

    return <Context.Provider value={{team,setTeam}}> 
        {children}
    </Context.Provider>
}

export default Context