import React from 'react'
import Canvas from './components/canvas'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'


const App = () => (

  <Router>
    <Switch>
      <Route path={'/'}
        component={Canvas} exact
      />
    </Switch>
  </Router>

)

export default App
