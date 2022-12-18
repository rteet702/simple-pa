import React, { useState } from "react";
import axios from "axios";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        const server = process.env.SERVER || "http://localhost:8000";
        e.preventDefault();
        axios
            .post(
                `${server}/api/users/login`,
                {
                    email,
                    password,
                },
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <h1 className="text-6xl text-center mb-5">Login</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
