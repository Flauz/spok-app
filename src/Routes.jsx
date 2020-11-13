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
                <Route path="/login" render={() => currentUser ? <Redirect to="/" />
                    : (
                        <Login />
                    )}
                />
                <Route path="/registration" render={() => currentUser ? <Redirect to="/" />
                    : <SignUp />}
                />

            </Switch>
        </>
    )
}

export default Routes
