import {Meteor} from 'meteor/meteor';
import {Persons} from './../imports/api/persons.js';
import Person from './../imports/ui/Person.js'

//On server startup checking if the is some data if no inserting 5 sample data
Meteor.startup(() => {
if (Persons.find({name: {$exists: true}}).count() === 0){
          Persons.insert({name: "Bill Gates", age: 62, isActive: false});
          Persons.insert({name: "Mark Zuckerberg", age: 33, isActive: true});
          Persons.insert({name: "Jeff Bezos", age: 54, isActive: true});
          Persons.insert({name: "Travis Kalanick", age: 41, isActive: false});
          Persons.insert({name: "Elon Musk", age: 46, isActive: true});
  }
});
