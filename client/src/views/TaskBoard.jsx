import React from "react";
import "../index.css";

// import Layout from '../components/Layout';
import Navbar from "../components/NavBar";
import TaskDetails from "../components/TaskDetails";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TaskBoard() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const server = process.env.SERVER || "http://localhost:8000";
        axios
            .get(`${server}/api/users`, { withCredentials: true })
            .then((user) => {
                console.log(user.data.user);
                setUser(user.data.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <TaskDetails />
        </div>
    );
}
export default TaskBoard;
