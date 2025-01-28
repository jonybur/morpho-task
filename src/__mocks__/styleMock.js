module.exports = new Proxy(
  {},
  {
    get: function getter(target, key) {
      // Return a function that returns the class name
      // This allows the mock to work with classNames and conditional classes
      return key;
    },
  }
);
