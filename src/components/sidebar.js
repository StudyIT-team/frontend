import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../App'
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export default class Sidebar extends Component {
  render(){
    return (
      <Menu id="menu">
        <a className="menu-item" href="/">
          <HomeIcon/>
          Home
        </a>
        <a className="menu-item" href="/">
          <LocalLibraryIcon />
          My Study
        </a>
      </Menu>
    );
  };
  }
