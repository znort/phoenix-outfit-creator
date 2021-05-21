import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import Generator from './components/generator'
import Builder from './components/builder'


const App = () => (

  <Router>
    <Switch>
      <Route path={'/'}
        component={Generator} exact
      />
      <Route path={'/generate-builder'}
        component={Builder} exact
      />
    </Switch>
  </Router>

)

export default App
