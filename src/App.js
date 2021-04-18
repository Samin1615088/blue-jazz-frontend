import './App.scss';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ProcessOrder from './components/ProcessOrder/ProcessOrder/ProcessOrder';
import DUserAllServices from './components/DUserAllServices/DUserAllServices';
import DAddReview from './components/DAddReview/DAddReview';

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
              < ProcessOrder />
            </PrivateRoute>


            {/* danger */}
            <PrivateRoute path="/dashboard/user/orders">
              <DUserAllServices/>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/user/addreview">
              <DAddReview/>
            </PrivateRoute>
            {/* danger */}


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
