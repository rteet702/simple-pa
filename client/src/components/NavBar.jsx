import { Link } from "react-router-dom";
import React from "react";


const Navbar = () => {


    const handleClick = () => {
    }

    return (
        <header>
            <div className="nav-container">
                <Link to="/taskboard">
                    <h1>S . I . M . P . L . E</h1>
                </Link>
                <nav>
                        <div>
                            <button to="/addtask">Add New</button>
                        </div>
                        <div>
                            <span></span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                </nav>
            </div>
        </header>
)}

export default Navbar;