import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Installation from './components/pages/Installation'
import Regrout from './components/pages/Regrout'
import Repair from './components/pages/Repair'
import Restoration from './components/pages/Restoration'
import ContactUs from './components/pages/ContactUs'
import React from 'react'

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path = '/' exact component={Home} />
        </Switch>

        <Switch>
          <Route path = '/services' exact component={Services} />
        </Switch>
        <Switch>
          <Route path = '/installation' exact component={Installation} />
        </Switch>
        <Switch>
          <Route path = '/regrout' exact component={Regrout} />
        </Switch>
        <Switch>
          <Route path = '/repair' exact component={Repair} />
        </Switch>
        <Switch>
          <Route path = '/restoration' exact component={Restoration} />
        </Switch>
        <Switch>
          <Route path = '/contact-us' exact component={ContactUs} />
        </Switch>
    </Router>
  );
}

export default App;
