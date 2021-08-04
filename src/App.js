import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Kitchens from './components/pages/Kitchens'
import Regrouting from './components/pages/Regrouting'
import Bathrooms from './components/pages/Bathrooms'
import Fireplaces from './components/pages/Fireplaces'
import Backsplashes from './components/pages/Backsplashes'
import Waterproofing from './components/pages/Waterproofing'
import ContactUs from './components/pages/ContactUs'
import Footer from './components/footer'
import React from 'react'

function App() {
  return (
    <body>
    <Router>
      <Navbar />
        <Switch>
          <Route path = '/' exact component={Home} />
        </Switch>

        <Switch>
          <Route path = '/services' exact component={Services} />
        </Switch>
        <Switch>
          <Route path = '/kitchens' exact component={Kitchens} />
        </Switch>
        <Switch>
          <Route path = '/fireplaces' exact component={Fireplaces} />
        </Switch>
        <Switch>
          <Route path = '/backsplashes' exact component={Backsplashes} />
        </Switch>
        <Switch>
          <Route path = '/bathrooms' exact component={Bathrooms} />
        </Switch>
        <Switch>
          <Route path = '/regrouting' exact component={Regrouting} />
        </Switch>
        <Switch>
          <Route path = '/waterproofing' exact component={Waterproofing} />
        </Switch>
        <Switch>
          <Route path = '/contact-us' exact component={ContactUs} />
        </Switch>
    </Router>
    <Footer/>
    </body>
  );
}

export default App;
