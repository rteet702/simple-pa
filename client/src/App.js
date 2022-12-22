import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./views/Main";
import TaskBoard from "./views/TaskBoard";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/taskboard" element={<TaskBoard />} />
            </Routes>
        </BrowserRouter>
    );
};
