import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../firebase.config';


const Login = () => {
    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<

    //private router redirect>
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log('location ', { from });
    //private router redirect<

    //firebase SignIn By Google>> >>
    // Initialize Firebase>
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    // Initialize Firebase<
    const handleGoogleSign = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const currentUserCreated = { ...userStatus };
                currentUserCreated.isLoggedIn = true;
                currentUserCreated.email = user.email;
                currentUserCreated.displayName = user.displayName || user.email.split('@')[0];
                currentUserCreated.profilePicUrl = user.photoURL;
                setUserStatus(currentUserCreated);
                //setting token >
                storeAuthToken();
                //setting token <
                history.replace(from);
            }).catch((error) => {
                console.log(error.message);
            });
    }
    //firebase SignIn By Google<< << 
    //firebase auth token >> >> >>
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(idToken => {
                //setting on session storage
                //    console.log("idToken", idToken);
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }
    //firebase auth token >> >> >>

    return (
        <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
            <button type="button" className="btn btn-brand w-25 rounded-pill" onClick={handleGoogleSign}><FontAwesomeIcon icon={faGoogle} /> SIGNING WITH GOOGLE</button>
        </div>
    );
};

export default Login;