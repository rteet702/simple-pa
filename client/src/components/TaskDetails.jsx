import React from "react";

const TaskDetails = () => {
    const handleClick = async () => {

    }
    return (
        <div className="task-details">
            <h4>Heading</h4>
            <strong>Task: </strong>
            <strong>Date: </strong>
            <strong>Description: </strong>
            <div>
            <span className="deleter" onClick={handleClick}>delete</span>
            </div>
            <div>
                <span className="updater" onClick={handleClick}>update</span>
            </div>
        </div>
    )
}

export default TaskDetails;