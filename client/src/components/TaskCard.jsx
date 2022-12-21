import axios from "axios";
import React from "react";
import { StyledButton } from "./StyledButton";
import { AlertIcon } from "@primer/octicons-react";

export const TaskCard = ({
    task,
    setTasks,
    toggle,
    toggleUpdate,
    selectTask,
    ...rest
}) => {
    const calculateDateDiff = () => {
        const date = new Date(task.dueAt);
        const today = new Date();
        const dateVal = date.valueOf();
        const todayVal = today.valueOf();

        const diff = dateVal - todayVal;
        const days = Math.trunc(diff / (1000 * 3600 * 24) + 1);

        if (days === 0) {
            return (
                <div className="flex gap-5 items-center">
                    <p className="text-amber-300">
                        {date.toLocaleDateString()}
                    </p>
                    <AlertIcon
                        verticalAlign="middle"
                        size="medium"
                        fill="#FCD453"
                    />
                </div>
            );
        } else if (days > 0) {
            return (
                <div className="flex gap-5">
                    <p>{date.toLocaleDateString()}</p>
                </div>
            );
        } else {
            return (
                <div className="flex gap-5 items-center">
                    <p className="text-red-500">{date.toLocaleDateString()}</p>
                    <AlertIcon
                        verticalAlign="middle"
                        size="medium"
                        fill="#f00"
                    />
                </div>
            );
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();

        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .delete(`${server}/api/tasks/${task.id}`)
            .then((response) => {
                console.log(response);
                setTasks((prev) => prev.filter((t) => t.id !== task.id));
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div
            className="w-full flex bg-white px-8 py-6 items-center  text-xl rounded-lg drop-shadow-sm hover:drop-shadow-lg transition-all cursor-pointer"
            {...rest}
        >
            <h4 className="text-2xl flex-1">{task.title}</h4>
            {calculateDateDiff()}
            <div className="flex gap-5 flex-1 justify-end">
                <StyledButton
                    theme="amber"
                    onClick={() => {
                        selectTask(task);
                        toggle();
                    }}
                >
                    View
                </StyledButton>
                <StyledButton
                    theme="cyan"
                    onClick={() => {
                        selectTask(task);
                        toggleUpdate();
                    }}
                >
                    Update
                </StyledButton>
                <StyledButton theme="red" onClick={handleDelete}>
                    Delete
                </StyledButton>
            </div>
        </div>
    );
};
