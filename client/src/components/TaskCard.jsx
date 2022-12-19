import React from "react";
import { StyledButton } from "./StyledButton";

export const TaskCard = ({ task }) => {
    const date = new Date(task.dueAt).toLocaleDateString();
    return (
        <div className="w-full flex bg-white px-8 py-6 items-center  text-xl rounded-lg drop-shadow-sm">
            <h4 className="text-2xl flex-1">{task.title}</h4>
            <p className="text-right flex-1">Due {date}</p>
            <div className="flex gap-5 flex-1 justify-end">
                <StyledButton theme="red">Delete</StyledButton>
                <StyledButton theme="cyan">Update</StyledButton>
            </div>
        </div>
    );
};
