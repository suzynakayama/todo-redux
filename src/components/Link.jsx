import React from "react";

const Link = ({ active, children, onClick }) => {
    return (
        <button
            className="btn waves-effect waves-light"
            onClick={onClick}
            disabled={active}
            style={{ marginLeft: "8px" }}
        >
            {children}
        </button>
    );
};

export default Link;
