import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
    Home,
    Concept,
    Founder,
    Engagements,
    Adresses,
    Menu,
    Contact
} from './components/index'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/concept" component={Concept} />
                <Route path="/founder" component={Founder} />
                <Route path="/engagements" component={Engagements} />
                <Route path="/adresses" component={Adresses} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    )
}

export default Routes
