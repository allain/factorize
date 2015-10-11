'use strict'

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static get AGE_REGEX() {
    return /^(\d{1,2})|(1[0-3]\d)$/;
  }

  static isPerson(p) {
    return p instanceof Person;
  }
}

Person.NAME_REGEX = /^[A-Z][a-z]+$/;

module.exports = Person;
