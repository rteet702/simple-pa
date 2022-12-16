import { Link } from "react-router-dom";
import React from "react";
import "../index.css";


const Navbar = () => {


    const handleClick = () => {
    }

    return (
        <header>
            <div className="nav-container">
                <Link to="/taskboard">
                    <h1 className="logo-main">S . I . M . P . L . E</h1>
                </Link>
                <nav>
                <div class="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." className="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
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