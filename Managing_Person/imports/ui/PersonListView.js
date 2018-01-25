import React from 'react'
import PropTypes from 'prop-types';
import PersonView from './PersonView.js'
import {Persons} from './../api/persons.js';

//View to list persons from PersonView
export default class PersonListView extends React.Component {
  renderPersons() {
    // If there is no data in database message appiers
    //Otherwise return person
      if (this.props.persons.length === 0) {
          return (
            <div className="person">
              <p className="person__message">Add a person.</p>
            </div>
          )
      }
      else{
            return this.props.persons.map((person) => {return <PersonView key={person._id} person={person}/>;});
          }
  }

  render() {
    return (
      <div>
        {this.renderPersons()}
      </div>
    );
  }
};

PersonListView.propTypes = {
  persons: PropTypes.array.isRequired
}
