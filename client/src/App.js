import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./views/Landing";
import TaskBoard from "./views/TaskBoard";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/taskboard" element={<TaskBoard />} />
            </Routes>
        </BrowserRouter>
    );
};
