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
import Profil from "./components/userAuth/Profil"
import SignUp from "./components/userAuth/SignUp"
import Recovery from "./components/userAuth/ResetPassword"
import SignIn from './components/userAuth/SignIn'
import WithAdminAuth from './hoc/withAdminAuth'
import ViewAdmin from './components/ViewAdmin'
import ViewOrder from './components/ViewOrder'
import ViewCart from './components/ViewCart'

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

                <Route path="/profil" render={() => (
                    !currentUser ? <Redirect to="/signin" /> : <Profil />
                )}
                />

                <Route path="/admin" render={() => (
                    <WithAdminAuth>
                        <ViewAdmin />
                    </WithAdminAuth>
                )}
                />


                
                <Route path="/order" render={() => <ViewOrder />} />

                <Route path="/cart" render={() => (
                    <ViewCart />
                )}
                />
            </Switch>
        </>
    )
}

export default Routes
