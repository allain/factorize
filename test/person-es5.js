function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.AGE_REGEX = /^(\d{1,2})|(1[0-3]\d)$/;
Person.NAME_REGEX = /^[A-Z][a-z]+$/;
Person.isPerson = function(p) {
  return p instanceof Person;
};

Person.prototype = {
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

module.exports = Person;