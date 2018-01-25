import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import AddPerson from './AddPerson.js';
import PersonList from './PersonList.js';

export default class App extends React.Component {
  render(){
    return(
      <div>
        {/* Representing different modules of application */}
          <TitleBar title={this.props.title}/>
          <div className="wrapper">
            <PersonList persons={this.props.persons}/>
            <AddPerson/>
          </div>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  persons: PropTypes.array.isRequired
};
