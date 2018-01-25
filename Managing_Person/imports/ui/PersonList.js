import React from 'react'
import PropTypes from 'prop-types';
import Person from './Person.js'
import {Persons} from './../api/persons.js';

export default class PersonList extends React.Component {
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
            return this.props.persons.map((person) => {return <Person key={person._id} person={person}/>;});
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

PersonList.propTypes = {
  persons: PropTypes.array.isRequired
}
