import React from "react";

const TaskDetails = () => {
    const handleClick = async () => {

    }
    return (
        <div className="todo-details">
            <h4>Heading</h4>
            <strong>Task: </strong>
            <strong>Date: </strong>
            <strong>Description: </strong>
            <span className="deleter" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TaskDetails;