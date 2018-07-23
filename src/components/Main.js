import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../stylesheets/Main.css';
import arrow_up_solid from '../assets/arrow_up_solid.svg';
import bars_solid from '../assets/bars_solid.svg'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <main>
        <img className='fas' src={bars_solid} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <img className='fas' src={arrow_up_solid} />
      </main>
    );
  }
}

export default Main;