import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Base } from "./newTaskModal/Base";
import { TaskCard } from "./TaskCard";

const TaskDetails = ({ toggle, modalVisible, tasks, setTasks }) => {
    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .get(`${server}/api/tasks`)
            .then((response) => {
                setTasks(response.data.tasks);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {modalVisible && <Base toggle={toggle} fetch={fetchTasks} />}
            <div className="flex px-5 pt-5 flex-col gap-5 w-9/12 mr-0 ml-auto">
                {tasks.map((task, index) => {
                    return (
                        <TaskCard key={index} task={task} setTasks={setTasks} />
                    );
                })}
            </div>
        </>
    );
};

export default TaskDetails;
