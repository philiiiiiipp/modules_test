/** @flow */
declare var module;

const Main = {
  helloWorld() {
    const result = 'Hello World';
    return result;
  }
};

// Works
// export default Main;

// Does not work
module.exports = Main;
