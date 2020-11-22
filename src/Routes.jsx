import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
    Home,
    Concept,
    Founder,
    Engagements,
    Adresses,
    Menu,
    Contact
} from './components/index'
import Login from './components/userAuth/Login'
import SignUp from "./components/userAuth/SignUp"
import Recovery from "./components/userAuth/Recovery"
import SignIn from './components/userAuth/SignIn'

const Routes = ({ currentUser }) => {

    return (
        <>
            <Switch>
                {/* ROUTES GENERALES */}
                <Route exact path="/" component={Home} />
                <Route path="/concept" component={Concept} />
                <Route path="/founder" component={Founder} />
                <Route path="/engagements" component={Engagements} />
                <Route path="/adresses" component={Adresses} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={Contact} />
                {/* ROUTES USERPROFIL */}
                <Route path="/signin" render={() => currentUser ? <Redirect to="/" />
                    : (
                        <SignIn />
                    )}
                />
                <Route path="/signup" render={() => currentUser ? <Redirect to="/" />
                    : <SignUp />}
                />

                <Route path="/recovery" render={() => (
                    <Recovery />
                )}
                />

            </Switch>
        </>
    )
}

export default Routes
