import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Report from "./components/Report";
import AddAmount from "./components/AddAmount";
import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Menubar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/report" component={Report} />
              <Route path="/add" component={AddAmount} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;
