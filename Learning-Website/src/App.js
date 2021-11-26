import React, {useState} from 'react';
import './App.css';
import Lecturers from './components/Lecturers';
import Home from './pages/Home';
import Courses from './components/Courses'
import LogIn from './components/Log-in';
import HeaderSection from './components/HeaderSection'
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";


export const ThemeContext = React.createContext();

export default function App() {
  const history = createBrowserHistory()

  const [userName, setUserName] = useState('Eman')
  return (
    <div className='App'>

      <ThemeContext.Provider value={userName}>
        <Router history={history}>
          <Home />

          <Switch>
          <Route exact path={'/'} component={HeaderSection} />
            <Route exact path={'/lecturers'} component={Lecturers} />
            <Route exact path={'/courses'} component={Courses} />
            <Route exact path={'/log-in'} component={LogIn} />


          </Switch>
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}


