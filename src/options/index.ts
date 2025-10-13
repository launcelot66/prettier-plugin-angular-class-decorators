import type { BooleanSupportOption, PathArraySupportOption, SupportOptions } from 'prettier';

const ngClassDecoratorsSortPropertiesOption: PathArraySupportOption = {
  category: 'NgCDP',
  type: 'path',
  array: true,
  default: [{ value: [] }],
  description: '',
};

/** Angular class decorators sort properties options. */
const NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION: PathArraySupportOption = {
  ...ngClassDecoratorsSortPropertiesOption,
  description: 'Define a list of decorator properties that are will be sorted.',
};

/** Pug default div tag. */
const NG_CLASS_DECORATORS_REMOVE_EMPTY_ARRAYS_PROPERTIES_OPTION: BooleanSupportOption = {
  category: 'NgCDP',
  type: 'boolean',
  default: false,
  description: 'Remove empty array properties from decorators objects (lie imports, providers or exports)',
};

/**
 * All supported options by `launcelot66/plugin-angular-class-decorators-properties`.
 */
export const options: SupportOptions = {
  NgModulePropertiesOrder: NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION,
  ComponentPropertiesOrder: NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION,
  InjectablePropertiesOrder: NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION,
  DirectivePropertiesOrder: NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION,
  PipePropertiesOrder: NG_CLASS_DECORATORS_SORT_PROPERTIES_OPTION,
  RemoveNgDecoratorEmptyArrayProperties: NG_CLASS_DECORATORS_REMOVE_EMPTY_ARRAYS_PROPERTIES_OPTION,
};
