// ###########
// # IMPORTS #
// ###########

// Importing Functionality
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Images and Icons
import icon_user from './images/icon_user.svg';
import icon_netlify from './images/icon_netlify.svg';
import icon_react from './images/icon_react.svg';
import icon_github from './images/icon_github.svg';
import icon_edit from './images/icon_edit.svg';
import icon_delete from './images/icon_delete.svg';

import './index.css'; //css file

// ########################
// # VARIABLE DECLARATION #
// ########################

const today = new Date().toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const logStatus = 'Login';
const userName = 'Divyansh Chahar';
const userId = 'divyanchahar@outlook.com';

const devName = 'Divyansh Chahar';
const devId = 'divyanshchahar@outlook.com';

const myData = [
  {
    sNo: 1,
    jobTitle: 'Front End Developer',
    company: 'Google',
    source: 'LinkedIn',
    dateAdded: today,
    jobStatus: 'pending'
  },
  {
    sNo: 2,
    jobTitle: 'Back End Developer',
    company: 'Meta',
    source: 'Naukari',
    dateAdded: today,
    jobStatus: 'interviewing'
  },
  {
    sNo: 3,
    jobTitle: 'Full Stack Developer',
    company: 'Amazon',
    source: 'Google',
    dateAdded: today,
    jobStatus: 'declined'
  }
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
        <div id='branding'>OPPURTUNITY</div>

        <p>{today}</p>

        <button onClick={() => setIsUserCreds(!isUserCreds)}>
          <img src={icon_user} alt='user icon' />
          {userName}
        </button>
      </div>

      {isUserCreds && (
        <div className='hoverpannel'>
          <p>{userName}</p>
          <p>{userId}</p>
          <button>Logout</button>
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
        <p>Date</p>
        <p>Source</p>
        <p>Actions</p>
      </div>
      {jobInfo.map((prop) => {
        const { sNo, jobTitle, company, source, dateAdded, jobStatus } = prop;
        return (
          <>
            <div className='joblist' key={sNo}>
              <p>{sNo}</p>
              <p>{jobTitle}</p>
              <p>{company}</p>
              <p>{jobStatus}</p>
              <p>{dateAdded}</p>
              <p>{source}</p>
              <div>
                <button>
                  <img src={icon_edit} alt='edit icon' />
                </button>
                <button>
                  <img src={icon_delete} alt='delete icon' />
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

function Footer() {
  return (
    <>
      <div className='bottombar'>
        <div className='credentialcontainer'>
          <div>
            <img src={icon_github} />
          </div>
          <div>
            {devName}
            <br></br>
            {devId}
            <br></br>
            <a href='#'>Source Code</a>
          </div>
        </div>
        <div>
          developed using <img src={icon_react} alt='' />
        </div>
        <div>
          hosted on <img src={icon_netlify} alt='' />
        </div>
      </div>
    </>
  );
}

function FinalRender() {
  return (
    <>
      <Header></Header>
      <JobList></JobList>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(<FinalRender />, document.getElementById('root'));
