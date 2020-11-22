import React, {useEffect} from "react"
import {useSelector} from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {auth , handleUserProfile} from "./firebase/utils"
import {setCurrentUser} from './redux/actions/userActions'

import Header from "./components/Header/Header"
import Routes from './Routes'
import { AnimatePresence } from 'framer-motion'
import {connect} from "react-redux"
import './App.css';
import Footer from "./components/Footer/Footer";


const App = props => {
  const {currentUser} = useSelector(user => user.userReducer)

  useEffect(() => {
    const {setCurrentUser, currentUser} = props

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await handleUserProfile(userAuth)
          userRef.onSnapshot(snapshot => {
            setCurrentUser({ 
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      };
      setCurrentUser(userAuth)
    })

    return () => {
      authListener()
    }
  }, [])

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <AnimatePresence>
        <Routes currentUser={currentUser}/>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

const mapDispathToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispathToProps)(App);
