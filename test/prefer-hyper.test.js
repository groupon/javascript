'use strict';

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

/** @type {import('eslint').Rule.RuleModule} */
const rule = {
  create(context) {
    const sourceCode = context.getSourceCode();

    function buildHyperscript(node) {
      switch (node.type) {
        case 'JSXElement': {
          const childArgs = node.children.length
            ? `, ${node.children.map(buildHyperscript)}`
            : '';

          const name = sourceCode.getText(node.openingElement.name);
          const isTagLike = /^[a-z-]+$/.test(name);
          const tag = isTagLike ? JSON.stringify(name) : name;
          return `h(${tag}${childArgs})`;
        }

        case 'JSXText': {
          return JSON.stringify(node.value);
        }

        default: {
          return sourceCode.getText(node);
        }
      }
    }

    return {
      JSXElement(node) {
        context.report({
          node,
          message: 'JSX syntax is forbidden',
          fix(fixer) {
            return fixer.replaceTextRange(node.range, buildHyperscript(node));
          },
        });
      },
    };
  },
  meta: {
    fixable: 'code',
  },
};

ruleTester.run('prefer-hyper', rule, {
  valid: [
    {
      code: 'var foo = true',
    },
  ],

  invalid: [
    {
      code: '<div><span>Hello</span></div>',
      output: `h("div", h("span", "Hello"))`,
      errors: [
        { message: 'JSX syntax is forbidden' },
        { message: 'JSX syntax is forbidden' },
      ],
    },
    {
      code: '<Custom />',
      output: `h(Custom)`,
      errors: [{ message: 'JSX syntax is forbidden' }],
    },
    {
      code: '<br />',
      output: `h("br")`,
      errors: [{ message: 'JSX syntax is forbidden' }],
    },
  ],
});
