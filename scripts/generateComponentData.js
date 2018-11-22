var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen');
var chokidar = require('chokidar');

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname,  '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) === '--watch';
if(enableWatchMode) {
  chokidar.watch([paths.examples, paths.components]).on('change', function(event, path) {
    generate(paths);
  });
} else {
  generate(paths);
}

function generate(paths) {
  var errors = [];
  var componentData = getDirectories(paths.components).map(function(componentName) {
    try {
      return getComponentData(paths, componentName)
    } catch(error) {
      errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
    }
  });
  writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));
}

function getComponentData(paths, componentName) {
  var content = readFile(path.join(paths.components, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  }
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName);
  return examples.map(function(file) {
    var filePath = path.join(examplesPath, componentName, file);
    var content = readFile(filePath);
    var info = parse(content);
    return {
      name: file.slice(0, -3),
      description: info.description,
      code: content
    }
  });
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch(error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getDirectories(filePath) {
  return fs.readdirSync(filePath).filter(function(file){
    return fs.statSync(path.join(filePath, file)).isDirectory();
  });
}

function getFiles(filePath) {
  return fs.readdirSync(filePath).filter(function(file) {
    return fs.statSync(path.join(filePath, file)).isFile();
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, function(err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}
