import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/NavigationLink.css';

class NavigationLink extends Component {
  render() {
    const { title, route } = this.props;

    return (
      <Link to={route} replace >
        {title} 
      </Link>
    );
  }
}

export default NavigationLink