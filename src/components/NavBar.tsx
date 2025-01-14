import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { Outlet } from "react-router-dom";

const Navbar = ({ }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        alert("You have logged out!"); // Replace with actual logout logic
    };
    const storeName = 'Food Mania'
    const username = 'Arshad'

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <h1>{storeName}</h1>
                </div>
                <div className="navbar-right">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        className="profile-icon"
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <p>{username}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
