import React from "react";
import { useState } from "react";
import { Base } from "./newTaskModal/Base";
import { TaskCard } from "./TaskCard";

const TaskDetails = ({ toggle, modalVisible }) => {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            {modalVisible && <Base toggle={toggle} />}
            <div className="flex justify-end px-5 pt-5">
                {tasks.map((task, index) => {
                    return <TaskCard key={index} task={task} />;
                })}
            </div>
        </>
    );
};

export default TaskDetails;
