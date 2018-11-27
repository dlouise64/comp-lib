/**
 * Input prompt example
 */

'use strict';
var inquirer = require('inquirer');
var shell = require('shelljs');
// var chalkPipe = require('chalk-pipe');

var questions = [
  {
    type: 'input',
    name: 'component_name',
    message: "Component name (PascalCase):"
  },
  {
    type: 'input',
    name: 'parent_css',
    message: "parent css name:"
  }
];

inquirer.prompt(questions).then(answers => {

  var root = 'src/components/';
  var name = answers.component_name;
  // make component dir

  var components_dir = root+name+'/';

  // make folder in component directory
  shell.mkdir(root+name);

  // copy component templates to component directory
  shell.cp('-R', './ci-templates/components/*', components_dir);

  // rename component file
  shell.mv('src/components/'+name+'/component.js', 'src/components/'+name+'/'+name+'.js')

  // rename test file
  shell.mv('src/components/'+name+'/component.test.js', 'src/components/'+name+'/'+name+'.test.js')

  // update index file
  shell.sed('-i', 'COMPONENT', './'+name, components_dir+'index.js');

  // update component file
  shell.sed('-i', 'COMPONENT_NAME', name, components_dir+name+'.js');
  shell.sed('-i', 'className="CSS_NAME"', 'className="'+answers.parent_css+'"', components_dir+name+'.js');

  // make examples directory
  shell.mkdir('src/docs/examples/'+name+'/');

  // copy example files
  shell.cp('-R', './ci-templates/examples/*', 'src/docs/examples/'+name+'/');

  // rename examples file
  shell.mv('src/docs/examples/'+name+'/component.js', 'src/docs/examples/'+name+'/Example'+name+'.js')

  // update examples file
  shell.sed('-i', 'COMPONENT_NAME', name, 'src/docs/examples/'+name+'/Example'+name+'.js');
  shell.sed('-i', 'sil-react/COMPONENT_NAME', 'sil-react/'+name, 'src/docs/examples/'+name+'/Example'+name+'.js');

  console.log('success: src/components/'+name+'/'+name+'.js');
  console.log('success: src/components/'+name+'/'+name+'.test.js');
  console.log('success: src/components/'+name+'/index.js');
  console.log('success: src/docs/examples/'+name+'/Example'+name+'.js');

  // shell.exec('npm run stop');
  shell.exec('npm run start');
});
