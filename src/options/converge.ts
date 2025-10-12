import type { ParserOptions } from 'prettier';
import type { NgClassDecoratorsOrderPrinterOptions } from '../printer';
import type { NgClassDecoratorsOrderOptions } from './types';

/**
 * Convert and merge options from Prettier and Angular Class Decorators specific options into one option object with normalized default values.
 *
 * @param options Options passed into the plugin by Prettier.
 * @returns The converged options.
 */
export function convergeOptions(options: ParserOptions & NgClassDecoratorsOrderOptions): NgClassDecoratorsOrderPrinterOptions {
  return {
    NgModulePropertiesOrder: options.NgModulePropertiesOrder,
    ComponentPropertiesOrder: options.ComponentPropertiesOrder,
    InjectablePropertiesOrder: options.InjectablePropertiesOrder,
    DirectivePropertiesOrder: options.DirectivePropertiesOrder,
    PipePropertiesOrder: options.PipePropertiesOrder,
    RemoveNgDecoratorEmptyArrayProperties: options.RemoveNgDecoratorEmptyArrayProperties,
    locStart: options.locStart,
    locEnd: options.locEnd,
    originalText: options.originalText,
    semi: options.semi,
    singleQuote: options.singleQuote,
    jsxSingleQuote: options.jsxSingleQuote,
    trailingComma: options.trailingComma,
    bracketSpacing: options.bracketSpacing,
    objectWrap: options.objectWrap,
    bracketSameLine: options.bracketSameLine,
    rangeStart: options.rangeStart,
    rangeEnd: options.rangeEnd,
    parser: options.parser,
    filepath: options.filepath,
    requirePragma: options.requirePragma,
    insertPragma: options.insertPragma,
    checkIgnorePragma: options.checkIgnorePragma,
    proseWrap: options.proseWrap,
    arrowParens: options.arrowParens,
    plugins: options.plugins,
    htmlWhitespaceSensitivity: options.htmlWhitespaceSensitivity,
    endOfLine: options.endOfLine,
    quoteProps: options.quoteProps,
    vueIndentScriptAndStyle: options.vueIndentScriptAndStyle,
    embeddedLanguageFormatting: options.embeddedLanguageFormatting,
    singleAttributePerLine: options.singleAttributePerLine,
    experimentalOperatorPosition: options.experimentalOperatorPosition,
    experimentalTernaries: options.experimentalTernaries,
    printWidth: options.printWidth,
    tabWidth: options.tabWidth,
  };
}
