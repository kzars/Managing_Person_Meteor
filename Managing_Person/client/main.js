import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Persons} from './../imports/api/persons.js';
import App from './../imports/ui/App.js';

Meteor.startup(() =>{
//Constantly checking if the has been any data changes
  Tracker.autorun(() =>{
    let persons = Persons.find().fetch();
    let title = "People managing application";

    ReactDOM.render(<App title={title} persons={persons}/>, document.getElementById('app'));
  });

});
