import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userStatus, setUserStatus] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (userStatus.isLoggedIn/*|| sessionStorage.getItem('token')*/) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;