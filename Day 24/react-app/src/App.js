import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useToggle();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
            )}
          />
          <Route path="/about" component={About} />
          <PrivateRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>
        props.isLoggedIn ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "" }} />
        )
      }
    />
  );
}

function Home(props) {
  return (
    <div className="Home">
      <h1>Home</h1>
      <h2>If not logged in cant access, Profile & Dashboard</h2>
      <button onClick={props.SetIsLoggedIn}>
        {props.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
function About() {
  return (
    <div className="About">
      <h1>About: Public Route</h1>
    </div>
  );
}
function Profile() {
  return (
    <div className="Profile">
      <h1>Profile</h1>
    </div>
  );
}
function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard: Private Route</h1>
    </div>
  );
}

export default App;
