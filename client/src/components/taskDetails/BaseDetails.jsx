import React from "react";
import { StyledButton } from "../styledComponents/StyledButton";

export const BaseDetails = ({ selected, toggle }) => {
    return (
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-30">
            <div className="bg-neutral-100 p-5 shadow-lg rounded-lg text-xl relative z-50 flex flex-col gap-3">
                <h2 className="text-3xl text-center">{selected.title}</h2>
                <p className="max-w-[400px]">{selected.description}</p>
                <p>
                    Needs to be completed by{" "}
                    {new Date(selected.dueAt).toLocaleDateString()}
                </p>
                <StyledButton theme="red" onClick={toggle}>
                    Close
                </StyledButton>
            </div>
        </div>
    );
};
