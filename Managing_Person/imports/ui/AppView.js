import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import NavigationBar from './NavigationBar';
import AddPerson from './AddPerson.js';
import PersonList from './PersonList.js';
import PersonListView from './PersonListView.js';
import {Link} from 'react-router-dom';

export default class AppView extends React.Component {
  render(){
    return(
      <div>
        {/* Representing different modules of application */}
          <TitleBar title={this.props.title}/>
          <NavigationBar/>
          <div className="wrapper">
            <PersonListView persons={this.props.persons}/>
          </div>
      </div>
    );
  }
};

AppView.propTypes = {
  title: PropTypes.string.isRequired,
  persons: PropTypes.array.isRequired
};
