
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPro from "./components/AddPro";
import Menubar from "./components/Menubar";
import FetchProfiles from "./components/FetchProfiles";
import EditProfile from "./components/EditProfile";
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
              <Route path="/add" component={AddPro} />
              <Route path="/get" component={FetchProfiles} />
              <Route path="/edit" component={EditProfile} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
