import axios from "axios";
import React from "react";
import { useState } from "react";
import { StyledButton } from "../StyledButton";

export const BaseUpdate = ({ toggle, fetch, selected }) => {
    const [name, setName] = useState(selected.title);
    const [description, setDescription] = useState(selected.description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .put(`${server}/api/tasks/${selected.id}`, {
                title: name,
                description,
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
                <h2 className="text-center text-3xl mb-5">Update Task</h2>
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
                    <StyledButton theme="amber">Submit</StyledButton>
                    <StyledButton theme="red" onClick={toggle}>
                        Cancel
                    </StyledButton>
                </form>
            </div>
        </div>
    );
};
