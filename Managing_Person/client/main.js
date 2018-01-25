import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Persons} from './../imports/api/persons.js';
import App from './../imports/ui/App.js';
import AppView from './../imports/ui/AppView.js';
import AppEdit from './../imports/ui/AppEdit.js';
import { Router, Route, browserHistory} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();
import {Switch } from 'react-router-dom';

Meteor.startup(() =>{
//Constantly checking if the has been any data changes
  Tracker.autorun(() =>{
    let persons = Persons.find().fetch();
    let title = "People managing application";
    let edittitle = "Click to edit people records";
    let addtitle = "Add people record's"

//Routing to different pages
const routes = (
    <Router history={history}>
      <div>
        <Route exact path="/" render={routeProps => <AppView title={title} persons={persons}/>}/>
        <Route exact path="/edit" render={routeProps => <AppEdit title={edittitle} persons={persons}/>}/>
        <Route exact path="/add" render={routeProps => <App title={addtitle} persons={persons}/>}/>
      </div>
    </Router>
);
    ReactDOM.render(routes, document.getElementById('app'));
  });
});
