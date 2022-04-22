// ###########
// # IMPORTS #
// ###########

// Importing Functionality
import React, { useState } from "react";
import ReactDOM from "react-dom";

// Images and Icons
import icon_user from "./images/icon_user.svg";

import "./index.css"; //css file

// ########################
// # VARIABLE DECLARATION #
// ########################

const today = new Date().toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const logStatus = "Login";
const userName = "Divyansh Chahar";
const userId = "divyanchahar@outlook.com";

// ##########################
// # COMPONENET DECLARATION #
// ##########################

// HEADER
function Header() {
  const [isUserCreds, setIsUserCreds] = useState(false);

  return (
    <>
      <div className='header'>
        <p>{today}</p>

        <button
          onMouseEnter={() => setIsUserCreds(true)}
          onMouseLeave={() => setIsUserCreds(false)}>
          <img src={icon_user} alt='user icon' />
        </button>
      </div>

      {isUserCreds && (
        <div className='hoverPannel'>
          <p>User Name: {userName}</p>
          <p>User E-mail: {userId}</p>
          <button>{logStatus}</button>
        </div>
      )}
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
