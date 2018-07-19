import React, { Component } from 'react';
import headshot_square from '../assets/headshot_square.jpg';

class Home extends Component {
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
        <section className="projects section">
          <span className="contentTitle">Some of My Work</span>
          <section className="projectContent">
            <div>Lessonly Project</div>
            <div>SMHub Project</div>
            <div>GRIP Project</div>
          </section>
        </section>
        <section className="testimonials section">
          <span className="contentTitle">Testimonials</span>
          <p>
            Aliquam hendrerit sagittis nisl non placerat. Quisque euismod laoreet lectus id sagittis. Duis pulvinar euismod lectus. Nullam sollicitudin purus a neque aliquam, a varius justo mollis. Maecenas mollis lorem neque. Donec accumsan nisi urna, consectetur tincidunt mi facilisis id. Integer nec nisi scelerisque, tempus mauris non, vestibulum dolor. Proin consectetur cursus lorem mattis cursus. Nam nec justo quis augue ullamcorper venenatis eget sit amet turpis. Quisque dignissim auctor felis, at condimentum erat. Nullam ut hendrerit nibh. Suspendisse finibus id nisi a viverra. Aliquam gravida sem ut nulla rhoncus, et elementum purus commodo. Nam ac finibus elit. Nullam hendrerit maximus rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </section>
        <section className="contact section">
          <span className="contentTitle">Contact Me</span>
          <section className="contactContent">
            <p className="contactMessage">Feel free to send me an email, or find me on Github or LinkedIn</p>
            <div className="emailForm">
              <section className="emailFormRow">
                <div>Name</div>
                <div>Email</div>
              </section>
              <section className="emailFormRow">
                <div>Subject</div>
              </section>
              <section className="emailFormRow">
                <div>Message</div>
              </section>
            </div>
          </section>
        </section>
        <section className="Copyright">
          <span>&copy; Lillian Gray</span>
        </section>
      </div>
    );
  }
}

export default Home;