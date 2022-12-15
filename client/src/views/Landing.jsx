import React from "react";
import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";

export const Landing = () => {
    const [showLogin, setShowLogin] = useState(true);

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
