import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/styledComponents/StyledButton";

export const Main = () => {
    const nav = useNavigate();

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="p-5 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                <h1 className="text-5xl text-center">
                    Welcome to{" "}
                    <span className="text-6xl text-amber-300 tracking-widest">
                        SIMPLE
                    </span>
                </h1>
                <p className="text-3xl">
                    The one stop shop to tracking all of the steps in your
                    project.
                </p>
                <StyledButton onClick={() => nav("/taskboard")}>
                    Continue to App
                </StyledButton>
            </div>
        </div>
    );
};
