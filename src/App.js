import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "./components/Header/Header"
import Routes from './Routes'
import { AnimatePresence } from 'framer-motion'

import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <AnimatePresence>
        <Routes />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
