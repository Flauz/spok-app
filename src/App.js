import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import CssBaseline from "@material-ui/core/CssBaseline"
import {auth , handleUserProfile} from "./firebase/utils"
import {setCurrentUser} from './redux/actions/userActions'
import Header from "./components/Header/Header"
import Routes from './Routes'
import { AnimatePresence } from 'framer-motion'
import './App.css';
import Footer from "./components/Footer/Footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette:{
    background: {
      default:"#faf2e6"
    }
  }
})

const App = () => {
  const {currentUser} = useSelector(user => user.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
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
      dispatch(setCurrentUser(userAuth))
    })

    return () => {
      authListener()
    }
  }, [])

  return (
    <div className="App">
      <MuiThemeProvider theme={theme} >
        <CssBaseline />
        <Header />
        <AnimatePresence>
          <Routes currentUser={currentUser}/>
        </AnimatePresence>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App
