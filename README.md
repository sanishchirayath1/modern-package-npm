# modern-npm-package
[![Maintainability](https://api.codeclimate.com/v1/badges/f6100b2eaa51d397e1b0/maintainability)](https://codeclimate.com/github/sanishchirayath1/modern-package-npm/maintainability)
[![snyk](https://snyk.io/test/npm/@sanishchirayath/modern-package-npm/badge.svg)](https://snyk.io/test/npm/@sanishchirayath/modern-package-npm)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8317dd28fc8bb91894ef/test_coverage)](https://codeclimate.com/github/sanishchirayath1/modern-package-npm/test_coverage)
[![npm (scoped)](https://img.shields.io/npm/v/%40sanishchirayath/modern-package-npm)](https://github.com/sanishchirayath1/modern-package-npm)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/%40sanishchirayath/modern-package-npm)](https://github.com/sanishchirayath1/modern-package-npm)

An npm package for demonstration purposes using TypeScript to build for both the ECMAScript Module format (i.e. ESM or ES Module) and CommonJS Module format (CJS). It can be used in Node.js and browser applications.

Read the [blog post](https://snyk.io/blog/best-practices-create-modern-npm-package/) for more information.

## Get Started

1. Run `npm install` in your terminal
1. Then run `npm run build`
1. Update the `package.json` file "name" field with your own package name. Example `@username/package-name`
1. Create an account with [npm](https://www.npmjs.com/signup) if you don't have one already. Also be sure to enable [two-factor authentication](https://docs.npmjs.com/configuring-two-factor-authentication)
1. Sign in to your npm account in your terminal with `npm login`
1. Run `npm publish --access=public` to publish your package

### Testing

1. Install developer dependencies using the following command in your terminal `npm i -D mocha @types/mocha chai @types/chai ts-node`
1. Create a new file `.mocharc.json` in the root directory with the following contents:
   ```json
   {
     "extension": ["ts"],
     "spec": "./**/*.spec.ts",
     "require": "ts-node/register"
   }
   ```
1. Create a `tests` folder
1. Create an `index.spec.ts` file in the `tests` folder
1. Write unit tests in the `index.spec.ts` file to test the code in `index.ts`
1. Add a `"test"` property in the `package.json` file and give it a value of `"mocha"`
1. Run `npm test` in your terminal from the root folder of the project
