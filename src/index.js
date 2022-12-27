const { join } = require('lodash');

function component() {
  const element = document.createElement('div');

  // Lodash imported by this script.
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());