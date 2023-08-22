import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          
        </Switch>
      </Router>
    </>
  )
}

export default App