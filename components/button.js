import React from "react";

function Button({ onClick = console.log, className = '', children = null, type = null, disabled = false, }) {
    return (React.createElement("button", { type: type, onClick: onClick, disabled: disabled, className: "bg-black text-white p-2 rounded uppercase text-sm font-bold"}, children));
}
export default Button;
