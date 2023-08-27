import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        </Routes>
      </Router>
    </>
  )
}

export default App
