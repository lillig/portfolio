import React, { Component } from 'react';

class NavigationLink extends Component {
  render() {
    const { title, route } = this.props;

    return (
      <a href={route}>
        {title} 
      </a>
    );
  }
}

export default NavigationLink