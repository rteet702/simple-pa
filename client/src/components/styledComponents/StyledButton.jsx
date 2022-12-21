import React from "react";

export const StyledButton = ({ children, theme, ...rest }) => {
    if (theme === "amber" || theme === undefined) {
        return (
            <button
                className="bg-white hover:bg-amber-500 px-5 py-2 rounded-xl text-xl shadow hover:shadow-lg transition-all"
                {...rest}
            >
                {children}
            </button>
        );
    } else if (theme === "red") {
        return (
            <button
                className="bg-white hover:bg-red-500 px-5 py-2 rounded-xl text-xl shadow hover:shadow-lg transition-all"
                {...rest}
            >
                {children}
            </button>
        );
    } else if (theme === "cyan") {
        return (
            <button
                className="bg-white hover:bg-cyan-300 px-5 py-2 rounded-xl text-xl shadow hover:shadow-lg transition-all"
                {...rest}
            >
                {children}
            </button>
        );
    }
};
