import React, { Component } from 'react';
import headshot_square from '../assets/headshot_square.jpg';

class About extends Component {
  render() {
    return (
      <div className="mainContent">
        <section className="about section">
          <span className="contentTitle">About Me</span>
          <section className="aboutContent">
            <div><img src={headshot_square} /></div>
            <div>Hello! My name is Lillian Gray, and I'm from Chicago, IL. I am currently a Computer Science major at Earlham College. I also just finished my first software engineering internship at Lessonly in Indianapolis, IN as a part of the Xtern program! My main skills are using Python and React.</div>
          </section>
        </section>
        <section className="Copyright">
          <span>&copy; Lillian Gray</span>
        </section>
      </div>
    );
  }
}

export default About;