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

  let src = 'src/';
  let components = 'components/';
  let comp_dir = src+components;
  let examples_dir = src+'docs/examples/';

  var name = answers.component_name;
  // make component dir

  var comp_named_dir = comp_dir+name+'/';

  // make folder in component directory
  shell.mkdir(comp_dir+name);

  // copy component templates to component directory
  shell.cp('-R', './ci-templates/components/*', comp_named_dir);

  // rename component file
  shell.mv(comp_dir+name+'/component.js', comp_dir+name+'/'+name+'.js')

  // rename test file
  shell.mv(comp_dir+name+'/component.test.js', comp_dir+name+'/'+name+'.test.js')

  // rename css file
  shell.mv(comp_dir+name+'/component.css', comp_dir+name+'/'+name+'.css')

  // update index file
  shell.sed('-i', 'COMPONENT', './'+name, comp_named_dir+'index.js');

  // update css file
  shell.sed('-i', '.COMPONENT', '.'+answers.parent_css, comp_dir+name+'/'+name+'.css');

  // update component file
  shell.sed('-i', 'COMPONENT_NAME', name, comp_named_dir+name+'.js');
  shell.sed('-i', 'className="CSS_NAME"', 'className="'+answers.parent_css+'"', comp_named_dir+name+'.js');

  // update test file
  shell.sed('-i', 'COMPONENT_NAME', name, comp_named_dir+name+'.test.js');
  shell.sed('-i', 'DIR', `./${name}`, comp_named_dir+name+'.test.js');

  // make examples directory
  shell.mkdir(examples_dir+name+'/');

  // copy example files
  shell.cp('-R', './ci-templates/examples/*', examples_dir+name+'/');

  // rename examples file
  shell.mv(examples_dir+name+'/component.js', examples_dir+name+'/Example'+name+'.js')

  // update examples file
  shell.sed('-i', 'COMPONENT_NAME', name, examples_dir+name+'/Example'+name+'.js');
  shell.sed('-i', 'sil-react/COMPONENT_NAME', 'sil-react/'+name, examples_dir+name+'/Example'+name+'.js');

  console.log('success: src/components/'+name+'/'+name+'.js');
  console.log('success: src/components/'+name+'/'+name+'.test.js');
  console.log('success: src/components/'+name+'/index.js');
  console.log('success: src/docs/examples/'+name+'/Example'+name+'.js');

  shell.exec('npm run start');
});
