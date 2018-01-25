import React from 'react'
import PropTypes from 'prop-types';
import {Persons} from './../api/persons.js';
import ClickToEdit from 'react-click-to-edit';

export default class Person extends React.Component{

  render(){
    return (
      <div key={this.props.person._id} className="person ">
          {/* Using click to edit fields from react-click-to-edit module
          Updating data for user with specific ID */}
          <ClickToEdit   endEditing={(value) => Persons.update({_id: this.props.person._id}, {name: value, age: Number(this.props.person.age), isActive: this.props.person.isActive})}>
            {this.props.person.name}
          </ClickToEdit>
          <ClickToEdit  endEditing={(value) => Persons.update({_id: this.props.person._id}, {age: Number(value), name: this.props.person.name, isActive: this.props.person.isActive})}>
            {this.props.person.age}
          </ClickToEdit>

          {/* Updating and representing is active status */}
          <div className="pretty p-switch p-fill"> 
            <input className="checkboxes" type="checkbox" name="personIsActive" checked={this.props.person.isActive}
            onChange={(value) => Persons.update({_id: this.props.person._id}, {age: Number(this.props.person.age), name: this.props.person.name, isActive: !this.props.person.isActive})}/>
            <div className="state">
              <label>Is active</label>
            </div>
          </div>

          {/* Delete user from database */}
          <button className="button button--round" onClick={() => Persons.remove(this.props.person._id)}>X</button>
      </div>
    );
  }
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};
