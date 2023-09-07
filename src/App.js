import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import OurTeam from "./components/ourTeam/OurTeam";
import Schemes from "./components/schemes/Schemes";
import NGOPage from "./components/schemes/Ngo";

function App() {
  return (
    <Router>
      {/* Conditionally render Header and Footer */}
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/schemes" component={Schemes} />
        <Route exact path="/ourTeam" component={OurTeam} />
        <Route exact path="/ngo" component={NGOPage} />
        <Route>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* Add more routes for other pages */}
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
