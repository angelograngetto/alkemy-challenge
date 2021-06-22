import {Route, Link} from 'wouter'

import Home from 'pages/Home'
import Login from 'pages/Login'
import SearchResults from 'pages/SearchResults';
import Detail from 'pages/Detail';
import SearchForm from 'components/SearchForm'

import { TeamContextProvider } from 'context/TeamContext'


function App() {
  return (
    <div>
      <Link to="/"><h1 className="text-center mt-2 m-0">SUPERHEROES ⚡</h1></Link>
      <p className="text-center mb-4">Make your team and FIGHT!</p>
      <div className="container">
        <SearchForm/>
      </div>
      <TeamContextProvider>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/detail/:id"
          component={Detail}
        />
      </TeamContextProvider>
      <Route
        path="/login"
        component={Login}
      />
    </div>
  );
}

export default App;
