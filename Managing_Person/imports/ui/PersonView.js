import React from 'react'
import PropTypes from 'prop-types';
import {Persons} from './../api/persons.js';
import ClickToEdit from 'react-click-to-edit';

//This view represents all of people records
export default class PersonView extends React.Component{

  render(){
    return (
      <div key={this.props.person._id} className="person ">
          <div className="wrapperview">
          <div className="wrappingitem"><b>Name:</b> {this.props.person.name}</div>
          <div className="wrappingitem1"><b>Age:</b> {this.props.person.age}</div>
          <div className="pretty p-switch p-fill">
            <input className="checkboxes" type="checkbox" name="personIsActive"    checked={this.props.person.isActive} />
            <div className="state">
              <label><b>Is active</b></label>
            </div>
          </div>
          </div>
      </div>
    );
  }
};

PersonView.propTypes = {
  person: PropTypes.object.isRequired
};
