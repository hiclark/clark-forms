# Clark Forms

📝 Clark React Redux Forms library

This library is a React project with Redux, Redux Forms, Styled-Components, and Jest/Enzyme. It includes particulars in the build pipeline including Airbnb ESlint, Prettier, hot-reloading, and SVG optimizations.

This application was initially scaffolded using [Create React App](https://github.com/facebookincubator/create-react-app) and then ejected, reference those docs for additional information. Below you will find some information on how this project is structured.

#### Project structure:

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

To test the Clark Forms library locally follow the instructions [here](https://yarnpkg.com/lang/en/docs/cli/link/).

### Testing

The testing suite uses Jest as the test runner and Enzyme as a utility to make testing React components easier. These functions are all made available globally in every test file in the `setupTests.js`.

- Run `yarn run lint` to run the linter
- Run `yarn test` to start the test runner

### Updating

For convience sake, we use the [cut-release](https://github.com/bjoerge/cut-release) project to easily publish to npm and follow SEMVER.

If for some reason you rather do this manually, the process is as follows:

1. Merge changes into `master`

1. `git checkout master`

1. Run `npm version` specifying the subsequent version based on SEMVER and supply a commit message using the `-m` flag. ex. `npm version patch -m "Upgrade to %s for reasons"`

1. `git push origin master`

1. `git push origin master --tags`

1. `yarn publish`

** In order to publish to the org `@clark-inc`, you must be logged-in. NPM CLI will provide a prompt to login. At that point contact either `@micheal` or `@ian` on slack in `#dev` channel for assistance. Before doing so please download [keybase](https://keybase.io/).

**Once you have cut a release remember to bump the version in your project.**

### Usage

To use the library run `yarn add @clark-inc/clark-forms`

You can then import the library in your component like so: `import Fieldset from '@clark-inc/clark-forms';`

The `Fieldset` component _must_ be wrapped in a `<form>` element and the form component _must_ be connected to `redux-forms`.

Ex.

```
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

Types include: `input`, `radioButton`, `checkbox`, `dropdown`, `textarea`.

Ex.

```
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
