import React from "react";
import { StyledButton } from "./StyledButton";

export const TaskCard = () => {
    return (
        <div className="flex justify-between w-9/12 bg-white px-8 py-6 items-center text-xl rounded-lg drop-shadow-sm">
            <h4 className="text-2xl">Heading</h4>
            <p>Task: </p>
            <p>Date: </p>
            <p>Description: </p>
            <div className="flex gap-5">
                <StyledButton theme="red">Delete</StyledButton>
                <StyledButton theme="cyan">Update</StyledButton>
            </div>
        </div>
    );
};
