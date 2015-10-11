var test = require('tape');

var factorize = require('../index.js');

test('factory exposes source statics', function(t) {
  ['es5', 'es6', 'es6-babel'].forEach(function(type) {
    var Person = require('./person-' + type);

    var Factory = factorize(Person);

    t.deepEqual(Factory.AGE_REGEX, Person.AGE_REGEX, 'exposes static prop of ' + type);
    t.deepEqual(Factory.NAME_REGEX, Person.NAME_REGEX, 'exposes static prop of ' + type);
    t.deepEqual(Factory.isPerson, Person.isPerson, 'exposes static methods of ' + type);
  })
  t.end();
});

test('objects instantiated using "new" factory are identical', function(t) {
  ['es5', 'es6', 'es6-babel'].forEach(function(type) {
    var Person = require('./person-' + type);

    t.deepEqual(
      new Person('Allain', 'Lalonde'),
      new factorize(Person)('Allain', 'Lalonde'),
      'objects are identical'
    );
  });

  t.end();
});

test('objects instantiated using factory are identical', function(t) {
 ['es5', 'es6', 'es6-babel'].forEach(function(type) {
    var Person = require('./person-' + type);

    t.deepEqual(
      new Person('Allain', 'Lalonde'),
      factorize(Person)('Allain', 'Lalonde'),
      'objects are identical'
    );
  });

  t.end();
});
