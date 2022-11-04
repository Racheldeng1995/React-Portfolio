import React from 'react';
import avatarImage from '../../assets/avatar/avatar.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img src={avatarImage} className="my-2" style={{ width: "10%" }} alt="avatar" />
      <div className="my-2">
        <p>
          My name is Rachel Deng, I’ve been working as data engineer for over 3 years. I'm currently working at Block.
          I also have passion about learning machine learning and software engineering. I love learning and trying new technology. 
          In my spare time, I love enjoying my life with travel and food.
        </p>
      </div>
    </section>
  );
}

export default About;
