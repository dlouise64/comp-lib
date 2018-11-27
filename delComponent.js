'use strict';
var shell = require('shelljs');

shell.rm('-rf', 'src/components');
shell.mkdir('src/components');
shell.rm('-rf', 'src/docs/examples/');
shell.mkdir('src/docs/examples');
