import React from "react";
import "../index.css";

// import Layout from '../components/Layout';
import Navbar from "../components/NavBar";
import TaskDetails from "../components/TaskDetails";
import axios from "axios";
import { useState } from "react";

function TaskBoard() {
    const [modalVisible, setModalVisibile] = useState(false);
    const [tasks, setTasks] = useState([]);

    const toggleModal = (e) => {
        setModalVisibile((prev) => !prev);
    };

    // const [user, setUser] = useState({});

    // useEffect(() => {
    //     const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
    //     axios
    //         .get(`${server}/api/users`, {
    //             withCredentials: true,
    //             headers: { Cookie: document.cookie },
    //         })
    //         .then((user) => {
    //             console.log(user.data.user);
    //             setUser(user.data.user);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    return (
        <div>
            <Navbar toggle={toggleModal} setTasks={setTasks} />
            <TaskDetails
                toggle={toggleModal}
                modalVisible={modalVisible}
                tasks={tasks}
                setTasks={setTasks}
            />
        </div>
    );
}
export default TaskBoard;
