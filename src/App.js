import {Route} from 'wouter'

import Home from 'pages/Home'
import Login from 'pages/Login'
import SearchResults from 'pages/SearchResults';

import { TeamContextProvider } from 'context/TeamContext'


function App() {
  return (
    <div>
      <TeamContextProvider>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
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
