import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./views/Landing";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    );
};
