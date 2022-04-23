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

const myData = [
  {
    sNo: 1,
    jobTitle: "Front End Developer",
    company: "A",
    source: "LinkedIn",
    jobStatus: "pending",
  },
  {
    sNo: 2,
    jobTitle: "Back End Developer",
    company: "B",
    source: "Naukari",
    jobStatus: "interviewing",
  },
  {
    sNo: 3,
    jobTitle: "Full Stack Developer",
    company: "C",
    source: "Google",
    jobStatus: "declined",
  },
];

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

// JOB LIST
function JobList() {
  const [jobInfo, setJobInfo] = useState(myData);
  return (
    <>
      <div className='joblist joblistheader'>
        <p>S.No.</p>
        <p>Position</p>
        <p>Company</p>
        <p>Status</p>
        <p>Source</p>
      </div>
      {jobInfo.map((prop) => {
        const { sNo, jobTitle, company, source, jobStatus } = prop;
        return (
          <>
            <div className='joblist'>
              <p>{sNo}</p>
              <p>{jobTitle}</p>
              <p>{company}</p>
              <p>{jobStatus}</p>
              <p>{source}</p>
            </div>
          </>
        );
      })}
    </>
  );
}

function FinalRender() {
  return (
    <>
      <Header></Header>
      <JobList></JobList>
    </>
  );
}

ReactDOM.render(<FinalRender />, document.getElementById("root"));
