import React from "react";

export const LoginForm = () => {
    return (
        <>
            <h1 className="text-6xl text-center mb-5">Login</h1>
            <form className="flex flex-col gap-5">
                <div>
                    <input
                        type="email"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="focus:outline-none rounded-lg px-3 py-2 text-xl shadow-sm focus:shadow-lg transition-shadow"
                        placeholder="Password"
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
