// ###########
// # IMPORTS #
// ###########

// Importing Functionality
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

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
  // function to subit forms
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      e.target.jobTitle.value &&
      e.target.company.value &&
      e.target.source.value
    ) {
      var temp = {
        sNo: jobData.length + 1,
        jobTitle: e.target.jobTitle.value,
        company: e.target.company.value,
        source: e.target.source.value,
        dateAdded: today,
        jobStatus: 'pending'
      };
    }

    jobData.push(temp);
    console.log(jobData);
  };
}

// JOB LIST
function JobList() {
  //
  const [jobInfo, setJobInfo] = useState(jobData);

  var [jobTitle, setJobTitle] = useState('');
  var [company, setCompany] = useState('');
  var [source, setSource] = useState('');

  return (
    <>
      <div>
        <form className='entryform'>
          <p></p> {/*  palceholder */}
          {/*  */}
          <input
            type='text'
            name='jobTitle'
            id='jobTitle'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder='Position'
          />
          <input
            type='text'
            name='company'
            id='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder='Company'
          />
          <p>status</p>
          <p>{today}</p>
          <input
            type='text'
            name='source'
            id='source'
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder='Source'
          />
          <button type='submit'>Add</button>
        </form>
      </div>

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FinalRender></FinalRender>
  </React.StrictMode>
);
