import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

import '../App'
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TableChartIcon from '@material-ui/icons/TableChart';

export default class Sidebar extends Component {

  render(){
    return (
      <Menu className="menu">
        <a className="menu-item" href="/">
          <HomeIcon/>
          Home
        </a>
        <a className="menu-item" href="/subjects">
          <LocalLibraryIcon />
          My Subjects
        </a>
        <a className="menu-item" href="/news">
          <AnnouncementIcon />
          News
        </a>
        <a className="menu-item" href="/timetable">
          <TableChartIcon />
          Time Table
        </a>
      </Menu>
    );
  };
  }
