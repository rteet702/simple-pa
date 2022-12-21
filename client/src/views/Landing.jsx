import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/login-and-reg/LoginForm";
import { RegisterForm } from "../components/login-and-reg/RegisterForm";

export const Landing = () => {
    const [showLogin, setShowLogin] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        const server = process.env.REACT_APP_SERVER || "http://localhost:8000";
        axios
            .get(`${server}/api/users`, { withCredentials: true })
            .then((user) => {
                nav("/taskboard");
            });
    }, []);

    const toggleLogin = () => {
        setShowLogin((prev) => {
            return !prev;
        });
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-neutral-50 text-2xl py-5 px-12 rounded-lg shadow-lg">
                {showLogin ? <LoginForm /> : <RegisterForm />}
                <button onClick={toggleLogin} className="mt-5 text-xl">
                    {showLogin
                        ? "Not registered? Click here!"
                        : "Already registered? Click here!"}
                </button>
            </div>
        </div>
    );
};
