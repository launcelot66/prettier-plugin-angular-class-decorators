import { type Parser, type Plugin, type Printer, type RequiredOptions, type SupportLanguage, type SupportOptions } from 'prettier';
import { parsers as prettierParsers } from 'prettier/plugins/typescript.js';
import { options as NGCDOOptions } from './options';
import { type AST, parse } from '@typescript-eslint/typescript-estree';
import type { NgClassDecoratorsOrderOptions } from './options/types';
import { NgClassDecoratorsOrderPrinter, type NgClassDecoratorsOrderPrinterOptions } from './printer';
import { convergeOptions } from './options/converge';

/** The plugin object that is picked up by prettier. */
export const plugin: Plugin<AST<{ range: true; loc: true; comment: true }>> = {
  languages: [
    {
      name: 'Typescript',
      parsers: ['typescript'],
      extensions: ['.ts'],
    },
  ],
  /* eslint-disable jsdoc/require-jsdoc */
  parsers: {
    typescript: {
      ...prettierParsers.typescript,
      parse(text, options): AST<{ range: true; loc: true; comment: true }> {
        const content: AST<{ range: true; loc: true; comment: true }> = parse(text, { range: true, loc: true, comment: true });
        const claimedOptions: NgClassDecoratorsOrderPrinterOptions = convergeOptions(options as NgClassDecoratorsOrderOptions);
        const printer: NgClassDecoratorsOrderPrinter = new NgClassDecoratorsOrderPrinter(content, claimedOptions);
        return printer.build();
      },
    },
  },
  /* eslint-enable jsdoc/require-jsdoc */
  options: NGCDOOptions,
  defaultOptions: {},
};

/** The languages that are picked up by prettier. */
export const languages: SupportLanguage[] | undefined = plugin.languages;
/** The parsers object that is picked up by prettier. */
export const parsers: { [parserName: string]: Parser } | undefined = plugin.parsers;
/** The printers object that is picked up by prettier. */
export const printers: { [astFormat: string]: Printer } | undefined = plugin.printers;
/** The options object that is picked up by prettier. */
export const options: SupportOptions | undefined = plugin.options;
/** The default options object that is picked up by prettier. */
export const defaultOptions: Partial<RequiredOptions> | undefined = plugin.defaultOptions;
export default plugin;
