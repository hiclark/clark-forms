# 📝 Clark Redux Forms library

A suite of form elements, normalizers, and validations for use with Redux-Forms. We use these across Clark's frontend applications. The entire library is typed with [Flow](https://flow.org/en/) and tested with Jest. To build, we transpile using [Babel](https://babeljs.io/) and then copy over our flow definitions using [`flow-copy-source`](https://github.com/AgentME/flow-copy-source).

h/t [Patrick Stapfer](https://twitter.com/ryyppy?source=user_profile----------------------------) for [writing up this pattern](https://medium.com/netscape/shipping-flowtype-definitions-in-npm-packages-c987917efb65) for sharing flow type-definitions across projects.

### Project structure:

The `src` directory contains both `lib` and `demo` folders. Demo serves as a sandbox to test, build, and see updates to the form components locally. The `lib` folder is where all the library production code goes.

```
|-- src
|   |-- demo
|   |-- lib
```

### Getting Started

- You will need to install [Yarn](https://yarnpkg.com/en/docs/install) for dependency management, if you do not have it already installed.

- Run the `yarn` command to install `node_modules`

- To build the demo project locally run `yarn start`

### Testing library integration locally

To test @clark-inc/clark-forms locally, ** _Make sure `build/` directory exists_ (`yarn build`) and then follow the instructions [here](https://yarnpkg.com/lang/en/docs/cli/link/).

### Testing

The testing suite uses Jest as the test runner and Enzyme as a utility to make testing React components easier. These functions are all made available globally in every test file in the `setupTests.js`.

- Run `yarn lint` to run the linter
- Run `yarn test` to start the test runner

### Updating

For convience sake, we use the [cut-release](https://github.com/bjoerge/cut-release) project to easily publish to npm and follow SEMVER.

Ensure that you've built the project before you publish.

**Once you have cut a release remember to bump the version in your project.**

### Usage

To use the library run `yarn add @clark-inc/clark-forms`

You can then import the library in your component like so: `import Fieldset from '@clark-inc/clark-forms';`

The `Fieldset` component _must_ be wrapped in a `<form>` element and the form component _must_ be connected to `redux-forms`.

Ex.

```js
const Demo = ({ handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit(handleClick)}>
      <Fieldset data={FIELD_SETS} />
      <button>Submit</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'demo',
})(Demo);
```

The `Fieldset` component takes one prop called data which is a json structure. These `FIELD_SETS` _must_ have a `type`, `name`, and `label`.

Types include:

- `input`
- `radioButton`
- `checkbox`
- `dropdown`
- `textarea`
- `datepicker`
- `dateRangePicker`
- `toggle`
- `rating`

Ex.

```js
const FIELD_SETS = [
  {
    fieldSet: [
      {
        columns: { small: 1, large: 2 },
        fields: [
          {
            type: 'input',
            name: 'accountNumber',
            label: 'Account Number',
            validate: [isRequired, minLength(6)],
            normalize: normalizeNumbers(16),
          },
          {
            type: 'input',
            name: 'routingNumber',
            label: 'Routing number',
            validate: [isRequired, minLength(9)],
            normalize: normalizeNumbers(9),
          },
        ],
      },
    ],
  },
];

```
