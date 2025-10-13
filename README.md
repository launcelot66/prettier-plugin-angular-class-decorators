<p align="center">
  <a href="https://prettier.io" target="_blank">
    <img alt="Prettier" src="https://cdn.rawgit.com/prettier/prettier-logo/master/images/prettier-icon-light.svg">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://angular.dev" target="_blank">
    <img alt="Angular" src="https://lh3.google.com/u/0/d/1S7QzMK5MggtQAnKnptrZN1JJNnDpQ8eK=w1919-h1003-iv1?auditContext=prefetch" width="210" height="210">
  </a>
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
  <!--<a href="https://github.com/launcelot66/plugin-angular-class-decorators/actions/workflows/ci.yml">
    <img alt="Build Status" src="https://github.com/launcelot66/plugin-angular-class-decorators/actions/workflows/ci.yml/badge.svg?branch=main">
  </a>-->
</p>

# Intro

Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

This plugin adds support for the Angular class decorators properties (like NgModule or Component) to Prettier.

---

- [Getting started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)

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
npx prettier --write "**/*.ts" --plugin="plugin-angular-class-decorators-properties"
# or
yarn prettier --write "**/*.ts" --plugin="plugin-angular-class-decorators-properties"
# or
pnpm prettier --write "**/*.ts" --plugin="plugin-angular-class-decorators-properties"
```

### Configuration file (.prettierrc)

| Name                                    | Type       | Default | Description                                                                                                                              |
|-----------------------------------------|------------|---------|------------------------------------------------------------------------------------------------------------------------------------------|
| `NgModulePropertiesOrder`               | `string[]` | `[]`    | A list of `@NgModule` properties in the correct order. All properties outside the list will be sorted in the same order as they were.    |
| `ComponentPropertiesOrder`              | `string[]` | `[]`    | A list of `@Component` properties in the correct order. All properties outside the list will be sorted in the same order as they were.   |
| `InjectablePropertiesOrder`             | `string[]` | `[]`    | A list of `@Injectable` properties in the correct order. All properties outside the list will be sorted in the same order as they were.  |
| `DirectivePropertiesOrder`              | `string[]` | `[]`    | A list of `@Directive` properties in the correct order. All properties outside the list will be sorted in the same order as they were.   |
| `PipePropertiesOrder`                   | `string[]` | `[]`    | A list of `@Pipe` properties in the correct order. All properties outside the list will be sorted in the same order as they were.        |
| `RemoveNgDecoratorEmptyArrayProperties` | `boolean`  | `false` | If set to `true` will remove properties from decorator object where value is empty array.                                                |

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
