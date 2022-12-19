import React from "react";
import { StyledButton } from "../StyledButton";

export const Base = ({ toggle }) => {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-neutral-100 p-5 shadow-lg rounded-lg text-xl relative">
                <h2 className="text-center text-3xl mb-5">Create a New Task</h2>
                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Task Name"
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        className="resize-none focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Task Description..."
                    ></textarea>
                    <input
                        type="date"
                        id="due"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                    />
                    <StyledButton theme="amber">Submit</StyledButton>
                    <StyledButton theme="red" onClick={toggle}>
                        Cancel
                    </StyledButton>
                </form>
            </div>
        </div>
    );
};
