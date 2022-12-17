import { Link, useNavigate } from "react-router-dom";
import { StyledButton } from "./StyledButton";
import React from "react";
import "../index.css";

const Navbar = () => {
    const nav = useNavigate();
    const handleClick = () => {};

    return (
        <header>
            <div className="flex justify-between items-center px-5 py-3">
                <Link to="/taskboard">
                    <h1 className="text-4xl">S . I . M . P . L . E</h1>
                </Link>
                <nav className="flex gap-5">
                    <StyledButton onClick={() => nav("/additem")}>
                        Add New
                    </StyledButton>
                    <StyledButton onClick={handleClick}>Log out</StyledButton>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
