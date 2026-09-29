import React from "react";

export function Header() {
  return (
    <header className="resume-header">
      <h1>Allen Calderon</h1>
      <p>Cybersecurity Student</p>
      <p>Fort Wayne, Indiana</p>
    </header>
  );
}

export function Summary() {
  return (
    <section className="resume-summary">
      <h2>Summary</h2>
      <p>
        Cybersecurity student at Indiana Institute of Technology with minors
        in Computer Science and Information Systems. Interested in gaining
        experience in cybersecurity, software, and information technology.
      </p>
    </section>
  );
}

export function Experience() {
  return (
    <section className="resume-experience">
      <h2>Experience</h2>
      <ul>
        <li>Field Marketer - EverDry Waterproofing (2026)</li>
        <li>Canvasser - EverDry Waterproofing (2026)</li>
      </ul>
    </section>
  );
}

export function Education() {
  return (
    <section className="resume-education">
      <h2>Education</h2>
      <ul>
        <li>
          Cybersecurity - Indiana Institute of Technology
          (Expected Graduation: 2028)
        </li>
        <li>Minor in Computer Science</li>
        <li>Minor in Information Systems</li>
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section className="resume-skills">
      <h2>Skills</h2>
      <ul>
        <li>C Programming</li>
        <li>Cybersecurity</li>
        <li>Networking</li>
        <li>SQL</li>
        <li>Linux</li>
        <li>HTML and CSS</li>
      </ul>
    </section>
  );
}
