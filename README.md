<p align="center">
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://prettier.io" target="_blank">
    <img alt="Prettier" src="https://cdn.rawgit.com/prettier/prettier-logo/master/images/prettier-icon-light.svg">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://pugjs.org" target="_blank">
    <img alt="Pug" src="https://cdn.rawgit.com/pugjs/pug-logo/eec436cee8fd9d1726d7839cbe99d1f694692c0c/SVG/pug-final-logo-_-colour-128.svg" height="210">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
</p>

<h2 align="center">Prettier plugin for manipulate Angular Class Decorators Properties</h2>


<p align="center">
  <a href="https://github.com/launcelot66/prettier-plugin-angular-class-decorators/blob/main/LICENSE">
    <img alt="license: MIT" src="https://img.shields.io/github/license/launcelot66/prettier-plugin-angular-class-decorators.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/plugin-angular-class-decorators-properties" target="_blank">
    <img alt="NPM package" src="https://img.shields.io/npm/v/plugin-angular-class-decorators-properties.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/plugin-angular-class-decorators-properties" target="_blank">
    <img alt="downloads" src="https://img.shields.io/npm/dt/plugin-angular-class-decorators-properties.svg?style=flat-square">
  </a>
  <a href="https://prettier.io" target="_blank">
    <img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <a href="https://github.com/launcelot66/plugin-angular-class-decorators/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/launcelot66/plugin-angular-class-decorators/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>
</p>

# Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

This plugin adds support for the Angular class decorators properties (like NgModule or Component) to Prettier.

---

- [Getting started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Workarounds / Known Issues](#workarounds--known-issues)
- [Integration with editors](#integration-with-editors)
- [Implementation details](#implementation-details)
- [Contributing](#contributing)
- [Credits](#credits)

## Getting started

Simply install `prettier` and `plugin-angular-class-decorators-properties` as your project’s `devDependencies`:

```bash
npm add --save-dev prettier plugin-angular-class-decorators-properties
# or
yarn add --dev prettier plugin-angular-class-decorators-properties
# or
pnpm add --save-dev prettier plugin-angular-class-decorators-properties
```


## Usage

### CLI

```bash
npx prettier --write "**/*.pug" --plugin="plugin-angular-class-decorators-properties"
# or
yarn prettier --write "**/*.pug" --plugin="plugin-angular-class-decorators-properties"
# or
pnpm prettier --write "**/*.pug" --plugin="plugin-angular-class-decorators-properties"
```

### Configuration file (.prettierrc)

```json
{
  "plugins": ["plugin-angular-class-decorators-properties"],
  "NgModulePropertiesOrder": ["imports", "providers", "declaration", "bootstrap", "exports"],
  "ComponentPropertiesOrder": ["selector"],
  "InjectablePropertiesOrder": ["providedIn"],
  "DirectivePropertiesOrder": ["selector"],
  "PipePropertiesOrder": ["name", "pure", "standalone"],
  "RemoveNgDecoratorEmptyArrayProperties": true
}
```
