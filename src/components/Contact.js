import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="mainContent">
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

export default Contact;