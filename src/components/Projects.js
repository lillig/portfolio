import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="mainContent">
        <section className="projects section">
          <span className="contentTitle">Some of My Work</span>
          <section className="projectContent">
            <div>Lessonly Project</div>
            <div>SMHub Project</div>
            <div>GRIP Project</div>
          </section>
        </section>
        <section className="Copyright">
          <span>&copy; Lillian Gray</span>
        </section>
      </div>
    );
  }
}

export default Projects;