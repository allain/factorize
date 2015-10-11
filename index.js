module.exports = function(Class) {
  function factory() {
    var args = Array.prototype.splice.call(arguments, 0);

    var fn = Class.bind.apply(Class, [this].concat(args));

    return new fn();
  };

  Object.keys(Class).forEach(function(staticName) {
    factory[staticName] = Class[staticName];
  });

  Object.getOwnPropertyNames(Class).forEach(function(prop) {
    var descriptor = Object.getOwnPropertyDescriptor(Class, prop);
    if (!descriptor.enumable) {
      factory[prop] = Class[prop];
    }
  });


  return factory;
}
