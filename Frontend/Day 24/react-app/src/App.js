import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { LoginContext, LoginProvider } from "./LoginContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Switch>
          <LoginProvider>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </LoginProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute(props) {
  const [isLoggedIn] = useContext(LoginContext);
  return (
    <Route
      path={props.path}
      render={(data) =>
        isLoggedIn ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "" }} />
        )
      }
    />
  );
}

function Home(props) {
  const [isLoggedIn, SetIsLoggedIn] = useContext(LoginContext);
  return (
    <div className="Home">
      <h1>Home</h1>
      <h2>If not logged in cant access, Profile & Dashboard</h2>
      <button onClick={SetIsLoggedIn}>{isLoggedIn ? "Logout" : "Login"}</button>
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
