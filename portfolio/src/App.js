import React from "react";

const App = () => {
  const portfolioData = {
    name: "YASH ARYAN",
    reg:"21BCE2527",
    place: "Bokaro, India",
    skills: ["UI/UX designing", "App Development", "Web Development","Public Speaking","Debate","Event Management"],
    projects: [
      {
        title: "Netflix Home Page Clone webpage",
        description: "With pure HTML and CSS a netflix home page clone is designed. This project helped me boost and finesse to my front-end skills.",
      },
      {
        title: "Notes & Password Manager App",
        description: "Note taking is a very good habit to organize our daily life. This is an online android application which helps to take notes at anytime and helps to generate a very strong password for your account security and makes the same available whenever you need. Basically it's a two-in-one app",
      },
     
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>REGISTRATION NUMBER:</u> {portfolioData.reg}</h2>
          <h2><u>PLACE:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>ABOUT ME</u></h3>
            <p>I'm a third-year student at Vellore Institute of Technology majoring in computer science. I have a solid background in software development and computer science as a BTech student. UI/UX design, web development, and application development are just a few of the tech-related topics that I find fascinating.
Right now, I'm working as an intern in the software development industry, where I'm developing my talents and getting real-world experience. I'm enthusiastic about how technology is advancing and how it will continue to influence our future. 
</p>
          </div>
          <div className="skills">
            <h3><u>SKILLS</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>PROJECTS</u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;