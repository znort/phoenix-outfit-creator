import React from 'react'
import Canvas from './components/canvas'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import GenerateBuilder from './components/generateBuilder'


const App = () => (

  <Router>
    <Switch>
      <Route path={'/'}
        component={Canvas} exact
      />
      <Route path={'/generate-builder'}
        component={GenerateBuilder} exact
      />
    </Switch>
  </Router>

)

export default App
