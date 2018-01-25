import React from 'react'
import {Persons} from './../api/persons.js';

export default class AddPerson extends React.Component{
  handleSubmit(event){
    //Defining variables with name, age and isActive values
    let personName = event.target.personName.value;
    var personAge = event.target.personAge.value;
    let personIsActive = event.target.personIsActive.checked;
    event.preventDefault();
    //Checking if fields are not empty if so inserting new data into database
    if (personName && personAge){
      Persons.insert({
        name: personName,
        age: Number(personAge),
        isActive: personIsActive
      });
      //Clearing form fields
      event.target.personName.value='';
      event.target.personAge.value='';
      event.target.personIsActive.checked=false;
      Meteor.startup(() =>{});
    }
  }

  render(){
    return(
      <div className="person">
        {/*Input form on submit call listener "handleSubmit"*/}
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="personName" placeholder="Person name"></input>
          <input className="form__input" type="number" name="personAge" placeholder="Age"></input>
          <div className="pretty p-switch p-fill">
            <input type="checkbox"  name="personIsActive" />
              <div className="state">
                <label>Is active</label>
              </div>
          </div>
          <button className="button">Add person</button>
        </form>
      </div>
    );
  }
}
