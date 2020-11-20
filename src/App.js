import React, {useEffect} from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import {auth , handleUserProfile} from "./firebase/utils"
import {setCurrentUser} from './redux/actions/userActions'

import Header from "./components/Header/Header"
import Routes from './Routes'
import { AnimatePresence } from 'framer-motion'

import './App.css';
import Footer from "./components/Footer/Footer";

const initialState = {
  currentUser: null
}

class App extends React.Component {
  state = {
    ...initialState
  }

  componentDidMount(){
    this.authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await handleUserProfile(userAuth)
          userRef.onSnapshot(snapshot => {
            this.setState({ 
              currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      };

      this.setState({
        ...initialState
      })
    })
  }

  componentWillUnmount() {
    this.authListener()
  }
  
  authListener = null
  render(){

    const {currentUser} = this.state
  return (
    <div className="App">
      <CssBaseline />
      <Header currentUser={currentUser}/>
      <AnimatePresence>
        <Routes currentUser={currentUser}/>
      </AnimatePresence>
      <Footer />
    </div>
  );
}}

export default App;
