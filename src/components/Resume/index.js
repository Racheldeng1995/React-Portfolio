import React from 'react';
import resume_file from '../../assets/file/Resume_Rachel.pdf'
function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>
      <a href={resume_file} download>Downloadable Resume</a>
      <div className="my-2">
        <h1> Tech Stack</h1>
        <div className="my-2">
            <p>
            HTML
            </p>
            <p>
            Javascript
            </p>
            <p>
            React
            </p>
            <p>
            Node.js
            </p>
            <p>
            Express.js
            </p>
            <p>
            MongoDB
            </p>
            <p>
            SQL
            </p>
            <p>
            IndexDB
            </p>
            <p>
            PWA
            </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;