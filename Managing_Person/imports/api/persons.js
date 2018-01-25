import {Mongo} from 'meteor/mongo';

//  Create collection (table) named persons
export const Persons = new Mongo.Collection('persons');
