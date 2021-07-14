import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <h2>Hi, my name is Oscar and welcome to my website.</h2>
      <div className="aboutsect">
        <h4>Background</h4>
        <p>
          I was born in Alberta, Canada and lived there until 11th grade when I
          moved to Texas to finish up the last two years of secondary. I then
          applied to the University of British Columbia for Applied Animal
          Biology, and moved to British Columbia, Canada for my post-secondary
          education. Presently, I have graduated with a Bachelors degree from
          UBC and am currently taking the diploma of Computer Systems Technology
          with an estimated graduation date of June, 2023.
        </p>
      </div>
      <br />
      <div className="aboutsect">
        <h4>Motivations</h4>
        <p>
          While studying biology was nice and intellectually stimulating, I
          didn't really enjoy my major as I felt that it focused too much on
          either research, memorization, or stifled creativity. As such, most of
          my hobbies were inclined towards filling my desire for creative
          problem solving: escape rooms, board games, badminton, etc. However,
          in my third year I took a programming class for an elective that was
          infamous for being difficult and tedious; CPSC110 - Introduction to
          Computations, Programs, and Programming. An industry where you can
          solve problems in creative ways AND get paid for it? I was immediately
          hooked, and knew that this is what I wanted to do for the rest of my
          life. With the encouragement of friends and family, I took a short
          break after graduating from UBC and applied for the CST program
          at BCIT, which is where I am today.
        </p>
      </div>
      <br />
      <div className="aboutsect">
        <h4>What Careers Am I Looking For?</h4>
        <p>
          Currently, I am looking for internships in the following areas:{" "}
          <b>Back-End</b>, <b>Game</b>, <b>Full-Stack</b>, and <b>Web App</b>{" "}
          Development.
        </p>
        <p>
          I am someone that thrives off of constantly being challenged and
          guided, and as such I am only looking for jobs that provide a good
          amount of mentorship and review, as well as allowing for some level of
          creative interpretation when it comes to problem-solving and/or
          development.
        </p>
      </div>
      <br />
    </div>
  );
};

export default AboutMe;
