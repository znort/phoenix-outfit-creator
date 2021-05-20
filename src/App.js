import React from 'react'
import Canvas from './components/canvas'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import GenerateOutfit from './components/generateOutfit'


const App = () => (

  <Router>
    <Switch>
      <Route path={'/'}
        component={Canvas} exact
      />
      <Route path={'/generate-outfit'}
        component={GenerateOutfit} exact
      />
    </Switch>
  </Router>

)

export default App
