import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const nav = useNavigate();

    const handleSubmit = (e) => {
        const server = process.env.SERVER || "http://localhost:8000";
        e.preventDefault();
        axios
            .post(
                `${server}/api/users/register`,
                {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                },
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response);
                nav("/taskboard");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <h1 className="text-6xl text-center mb-5">Register</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-amber-300 hover:bg-amber-200 p-2 rounded-lg transition-colors shadow"
                >
                    Submit
                </button>
            </form>
        </>
    );
};
