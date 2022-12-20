import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Base } from "./newTaskModal/Base";
import { BaseDetails } from "./taskDetails/BaseDetails";
import { TaskCard } from "./TaskCard";

const TaskDetails = ({ toggle, modalVisible, tasks, setTasks }) => {
    const [selectedTask, setSelectedTask] = useState({});
    const [detailsVisibility, setDetailsVisibility] = useState(false);

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

    const toggleVisibility = () => {
        setDetailsVisibility((prev) => !prev);
    };

    return (
        <>
            {modalVisible && <Base toggle={toggle} fetch={fetchTasks} />}
            {detailsVisibility && (
                <BaseDetails
                    selected={selectedTask}
                    toggle={toggleVisibility}
                />
            )}
            <div className="flex px-5 pt-5 flex-col gap-5 w-9/12 mr-0 ml-auto">
                {tasks.map((task, index) => {
                    return (
                        <TaskCard
                            key={index}
                            task={task}
                            setTasks={setTasks}
                            onClick={() => {
                                setSelectedTask(task);
                            }}
                            toggle={toggleVisibility}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default TaskDetails;
