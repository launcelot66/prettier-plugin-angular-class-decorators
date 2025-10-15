<p align="center">
  <a href="https://prettier.io" target="_blank">
    <img alt="Prettier" src="https://cdn.rawgit.com/prettier/prettier-logo/master/images/prettier-icon-light.svg">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://angular.dev" target="_blank">
    <img alt="Angular" src="https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif" width="210" height="210">
  </a>
</p>

<h2 align="center">Prettier plugin for manipulate Angular Class Decorators Properties</h2>


<p align="center">
  <a href="https://github.com/launcelot66/prettier-plugin-angular-class-decorators/actions/workflows/build.yml/badge.svg">
    <img alt="Build Status" src="https://github.com/launcelot66/temp2/actions/workflows/build.yml/badge.svg">
  </a>
  <a href="https://gist.githubusercontent.com/launcelot66/d5b942001bb4c3c9e0dc4c31943a8dca/raw/plugin-angular-class-decorators-properties-heads-main.json">
    <img alt="Coverage: 100%" src="https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/launcelot66/raw/e43e03d301b7f42103cd9a14855b04e995a9def9/plugin-angular-class-decorators-properties-heads-main.json">
  </a>
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

| Name                                                                       | Description                                                                                                                              |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `NgModulePropertiesOrder`<br/>Type:`string[]` Default:`[]`                 | A list of `@NgModule` properties in the correct order. All properties outside the list will be sorted in the same order as they were.    |
| `ComponentPropertiesOrder`<br/>Type:`string[]` Default:`[]`                | A list of `@Component` properties in the correct order. All properties outside the list will be sorted in the same order as they were.   |
| `InjectablePropertiesOrder`<br/>Type:`string[]` Default:`[]`               | A list of `@Injectable` properties in the correct order. All properties outside the list will be sorted in the same order as they were.  |
| `DirectivePropertiesOrder`<br/>Type:`string[]` Default:`[]`                | A list of `@Directive` properties in the correct order. All properties outside the list will be sorted in the same order as they were.   |
| `PipePropertiesOrder`<br/>Type:`string[]` Default:`[]`                     | A list of `@Pipe` properties in the correct order. All properties outside the list will be sorted in the same order as they were.        |
| `RemoveNgDecoratorEmptyArrayProperties`<br/>Type:`boolean` Default:`false` | If set to `true` will remove properties from decorator object where value is empty array.                                                |


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
