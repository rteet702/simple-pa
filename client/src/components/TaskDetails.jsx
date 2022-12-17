import React from "react";
import { StyledButton } from "./StyledButton";

const TaskDetails = () => {
    const handleClick = async () => {};

    return (
        <div className="flex justify-end px-5 pt-5">
            <div className="flex justify-between w-9/12 bg-white px-8 py-6 items-center text-xl rounded-lg drop-shadow-sm">
                <h4 className="text-2xl">Heading</h4>
                <p>Task: </p>
                <p>Date: </p>
                <p>Description: </p>
                <div className="flex gap-5">
                    <StyledButton theme="red" onClick={handleClick}>
                        Delete
                    </StyledButton>
                    <StyledButton theme="cyan" onClick={handleClick}>
                        Update
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
