import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
import './Slidebar.scss';

const Slidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="slidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                {
                    !isAdmin ?
                        (<div>
                            <li>
                                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order Service dummy</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/user/orders" style={{ textDecoration: "none", color: "white" }}>
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Ordered Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/user/addreview" style={{ textDecoration: "none", color: "white" }}>
                                    <FontAwesomeIcon icon={faHome} /> <span>Review</span>
                                </Link>
                            </li>
                        </div>)
                        :
                        (<div>
                            <li>
                                <Link to="/dashboard/admin/allorders" style={{ textDecoration: "none", color: "white" }}>
                                    <FontAwesomeIcon icon={faCalendar} /> <span>All Orders</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/admin/addServices" style={{ textDecoration: "none", color: "white" }}>
                                    <FontAwesomeIcon icon={faFileAlt} />
                                    <span>AddService</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/admin/makeAdmin" style={{ textDecoration: "none", color: "white" }} >
                                    <FontAwesomeIcon icon={faUserPlus} style={{ textDecoration: "none", color: "white" }} /> <span>AddAdmin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/admin/manageOrders" style={{ textDecoration: "none", color: "white" }} >
                                    <FontAwesomeIcon icon={faFileAlt} style={{ textDecoration: "none", color: "white" }} /> <span>Manage</span>
                                </Link>
                            </li>
                        </div>)
                }
            </ul>
            <div>
                <Link to="/" ><FontAwesomeIcon icon={faSignOutAlt} style={{ textDecoration: "none", color: "white" }} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Slidebar;



