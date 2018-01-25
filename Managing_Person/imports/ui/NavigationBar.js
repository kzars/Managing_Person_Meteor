import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class NavigationBar extends React.Component {
  render(){
    return(
      //Navigation bar with links to all pages
      //To navigate we are using <Link> from 'react-router-dom'
      <div  className="title-bar">
        <div className="wrapper">
          <div className="topnav">
            <Link to=''>View</Link>
            <Link to='/edit'>Edit</Link>
            <Link to='/add'>Add</Link>
          </div>
        </div>
      </div>
    )
  }
}
