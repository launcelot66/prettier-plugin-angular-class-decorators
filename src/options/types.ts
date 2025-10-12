import type { ParserOptions } from 'prettier';

/**
 * Extended option object.
 */
export interface NgClassDecoratorsOrderOptions<T = any> extends ParserOptions<T> {
  NgModulePropertiesOrder: string[];
  ComponentPropertiesOrder: string[];
  InjectablePropertiesOrder: string[];
  DirectivePropertiesOrder: string[];
  PipePropertiesOrder: string[];
  RemoveNgDecoratorEmptyArrayProperties: boolean;
}

/**
 * Identifier object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type Identifier = {
  type: 'Identifier';
  decorators: Decorator[];
  name: string;
  optional: boolean;
};

/**
 * Property object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type Property = {
  type: 'Property';
  key: Identifier;
  value: {
    type: string;
    elements?: [];
  };
};

/**
 * ObjectExpression object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type ObjectExpression = {
  type: string;
  properties: Property[];
};

/**
 * CallExpression object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type CallExpression = {
  type: string;
  arguments: ObjectExpression[];
  callee: {
    type: string;
    name: string;
  };
};

/**
 * Decorator object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type Decorator = {
  type: 'Decorator';
  expression: CallExpression;
};

/**
 * ProgramStatement object for `@prettier/plugin-angular-class-decorators-properties`.
 */
export type ProgramStatement = {
  type: string;
  declaration: {
    type: string;
    decorators: Decorator[];
  };
};
