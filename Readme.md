To reproduce:

    npm run build && npm run test
    
Outcome

    /module_test/lib/main.js:15
    _module.exports = Main;
    ^

    ReferenceError: _module is not defined
        at Object.<anonymous> (/Users/philipp/node/dev/module_test/lib/main.js:15:1)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.require (module.js:497:17)
        at require (internal/module.js:20:19)
        at Object.<anonymous> (/Users/philipp/node/dev/module_test/testLib/test.js:3:9)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.require (module.js:497:17)
        at require (internal/module.js:20:19)
        at /Users/philipp/node/dev/module_test/node_modules/mocha/lib/mocha.js:230:27
        at Array.forEach (native)
        at Mocha.loadFiles (/Users/philipp/node/dev/module_test/node_modules/mocha/lib/mocha.js:227:14)
        at Mocha.run (/Users/philipp/node/dev/module_test/node_modules/mocha/lib/mocha.js:495:10)
        at Object.<anonymous> (/Users/philipp/node/dev/module_test/node_modules/mocha/bin/_mocha:460:18)
        at Module._compile (module.js:570:32)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.runMain (module.js:604:10)
        at run (bootstrap_node.js:390:7)
        at startup (bootstrap_node.js:150:9)
        at bootstrap_node.js:505:3
    npm ERR! Test failed.  See above for more details.
