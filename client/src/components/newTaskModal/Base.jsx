import axios from "axios";
import React from "react";
import { useState } from "react";
import { StyledButton } from "../StyledButton";

export const Base = ({ toggle, fetch }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .post(`${server}/api/tasks`, {
                title: name,
                description,
                dueAt: date,
            })
            .then((response) => {
                console.log(response);
                fetch();
                toggle();
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-30">
            <div className="bg-neutral-100 p-5 shadow-lg rounded-lg text-xl relative z-50">
                <h2 className="text-center text-3xl mb-5">Create a New Task</h2>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Task Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        className="resize-none focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Task Description..."
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                    <input
                        type="date"
                        id="due"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        onChange={(e) => setDate(e.target.valueAsDate)}
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
