'use strict';

var Main = {
  helloWorld: function helloWorld() {
    var result = 'Hello World';
    return result;
  }
};

// Works
// export default Main;

// Does not work

_module.exports = Main;