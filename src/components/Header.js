import React, { Component } from 'react';
import NavigationLink from './NavigationLink';

const navigationLinksArray = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About Me",
    route: "/about",
  },
  {
    title: "My Projects",
    route: "/projects",
  },
  {
    title: "My Skills",
    route: "/skills",
  },
  {
    title: "Contact Me",
    route: "/contact",
  },
];

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerImageContainer">
          {/*<css-doodle>
            :doodle {
              @grid: 10X30;
              @size: 100% 100%;
              background: #f7f75f;
            }
            :container {
              grid-gap: .5em;
            }
            :after {
              content: '\@hex(@rand(0x2500, 0x257f))';
              font-size: 1em; 
              color: @pick(
                #dd557e, #5252ad, #8345a5
              );
            }
          </css-doodle>*/}
          <span className="headerText">Hello World!</span>
        </div>
        <div className="NavBar">
          {navigationLinksArray.map(navigationLink => (
            <NavigationLink title={navigationLink.title} route={navigationLink.route} />
          ))}
        </div>
      </header>
    );
  }
}

export default Header;