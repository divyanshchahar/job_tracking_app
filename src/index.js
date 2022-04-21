import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const logStatus = "Login";
const userName = "Divyansh Chahar";
const userId = "divyanchahar@outlook.com";

function Header() {
  return (
    <div className='header'>
      <p>{today}</p>

      <p>{userName}</p>
      <p>{userId}</p>
      <button>{logStatus}</button>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
