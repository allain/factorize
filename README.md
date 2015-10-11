# factorize

A utility for adding Factory Pattern support to ES5+ classes.

## Installation

```bash
npm install factorize
```

## Usage

Factorize exposes a single function which accepts a constructor function, or an ES6 class, and returns a function which can be used to create instances by using "new" or not.

```
var factorize = require('factorize');

Classname = factorize(Classname);

// Then to create instances you can either:
//
// Call the Classname as a function
var inst1 = Classname();

// or use the class name as a function
var inst1 = new Classname();
```

*Note: Yes, I know this is a verb with a pre-existing meaning but I like this one.*