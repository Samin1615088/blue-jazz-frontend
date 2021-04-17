import './App.scss';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ProcessOrder from './components/ProcessOrder/ProcessOrder/ProcessOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  console.log("loggedInUser", loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orderProcess/:serviceId">
              < ProcessOrder/>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
