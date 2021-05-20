import React from 'react'
import Dashboard from './components/dashboard'
import Products from './components/products'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'


const App = () => (

  <Router>
    <Switch>
      <Route path={'/'}
        component={Dashboard} exact
      />
      <Route path={'/products'} exact
        component={Products}
      />
    </Switch>
  </Router>

)

export default App
