import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "./styledComponents/StyledButton";
import React from "react";
import "../index.css";
import axios from "axios";

const Navbar = ({ toggle }) => {
    const nav = useNavigate();

    // const handleLogout = () => {
    //     const server = process.env.SERVER || "http://localhost:8000";
    //     axios
    //         .get(`${server}/api/users/logout`, { withCredentials: true })
    //         .then(() => {
    //             nav("/");
    //         });
    // };

    return (
        <header>
            <div className="flex justify-between items-center px-5 py-3">
                <Link to="/taskboard">
                    <h1 className="text-4xl">S . I . M . P . L . E</h1>
                </Link>
                <nav className="flex gap-5">
                    <StyledButton onClick={toggle}>Add New</StyledButton>
                    {/* <StyledButton onClick={handleLogout}>Log out</StyledButton> */}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
