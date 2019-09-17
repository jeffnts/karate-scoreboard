import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path='/' component={()=> <h1>Karate scoreboard.</h1>} />
            </Switch>
        </Router>
    )
}

export default Routes