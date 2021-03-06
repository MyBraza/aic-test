const {readdirSync} = require('fs')

const getDirectories = (source) =>
  readdirSync(source, {withFileTypes: true})
    .filter(dir => dir.isDirectory())
    .map(dir => ({name: dir.name, value: dir.name}));

const componentTypeName = 'componentType';

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter component name'
    }],
    actions: (data) => {
      const path = 'src/blocks/';
      return [
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/Component/Component.tsx.hbs'
        },
        {
          type: 'add',
          path: `${path}{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/Component/index.ts.hbs'
        },
        {
          type: 'append',
          path: `${path}index.ts`,
          separator: '',
          templateFile: 'plop-templates/Component/exportAll.ts.hbs'
        }
      ]
    }
  })
}
