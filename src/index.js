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

import data from './sample.json';

// ########################
// # VARIABLE DECLARATION #
// ########################

const today = new Date().toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const userName = 'Divyansh Chahar';
const userId = 'divyanchahar@outlook.com';

const devName = 'Divyansh Chahar';
const devId = 'divyanshchahar@outlook.com';

var jobData = [];

var sNo = 0;
var jobTitle = '';
var company = '';
var status = '';
var dateAdded = new Date();
var source = '';

// ########################
// # FUNCTION DECLARATION #
// ########################

// function to read data from json file
function readData() {
  data.map((dataPoint) => {
    jobData.push(dataPoint);
  });
}

readData();

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

// FROM FOR ADDING MORE JOBS
function JobForm() {
  return (
    <>
      <form className='entryform'>
        <p></p> {/*  palceholder */}
        {/*  */}
        <input type='text' placeholder='Position' />
        {/*  */}
        <input type='text' placeholder='Company' />
        {/*  */}
        <p>status</p>
        {/*  */}
        <p>{today}</p>
        {/*  */}
        <input type='text' placeholder='Source' />
        {/*  */}
        <button type='submit'>Add</button>
      </form>
    </>
  );
}

// JOB LIST
function JobList() {
  //
  const [jobInfo, setJobInfo] = useState(jobData);
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

//FOOTER
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

// #########################
// # RENDERING COMPONENETS #
// #########################

function FinalRender() {
  return (
    <>
      <Header></Header>
      <JobForm></JobForm>
      <JobList></JobList>
      <Footer></Footer>
    </>
  );
}

ReactDOM.render(<FinalRender />, document.getElementById('root'));
