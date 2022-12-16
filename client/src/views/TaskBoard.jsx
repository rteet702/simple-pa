import React from "react";
import "../index.css";

// import Layout from '../components/Layout';
import Navbar from "../components/NavBar";
import TaskDetails from "../components/TaskDetails";

function TaskBoard() {
    return (
        <div>
            <Navbar />
            <TaskDetails />
        </div>
    );
}
export default TaskBoard;
