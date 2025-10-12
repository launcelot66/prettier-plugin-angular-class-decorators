import type { ParserOptions } from 'prettier';
import type { AST } from '@typescript-eslint/typescript-estree';
import type { Decorator, ObjectExpression, ProgramStatement, Property } from './options/types';

/**
 * Options for `launcelot66/plugin-angular-class-decorators-properties`.
 */
export interface NgClassDecoratorsOrderPrinterOptions extends ParserOptions {
  readonly NgModulePropertiesOrder: string[];
  readonly ComponentPropertiesOrder: string[];
  readonly InjectablePropertiesOrder: string[];
  readonly DirectivePropertiesOrder: string[];
  readonly PipePropertiesOrder: string[];
  readonly RemoveNgDecoratorEmptyArrayProperties: boolean;
}

/**
 * NgClassDecoratorsOrderPrinter for `launcelot66/plugin-angular-class-decorators-properties`.
 */
export class NgClassDecoratorsOrderPrinter {
  private readonly content: AST<{ range: true; loc: true; comment: true }>;
  private readonly options: NgClassDecoratorsOrderPrinterOptions;

  /**
   * Constructs a new NgClassDecoratorsOrderPrinter.
   *
   * @param content The ESTSTree that will be used for sort and modify.
   * @param options The options from prettier used for modify content.
   */
  public constructor(content: AST<{ range: true; loc: true; comment: true }>, options: NgClassDecoratorsOrderPrinterOptions) {
    this.content = content;
    this.options = options;
  }

  /**
   * Modify and sort Angular decorators properties.
   * @returns AST<{ range: true; loc: true; comment: true }>.
   */
  public build(): AST<{ range: true; loc: true; comment: true }> {
    for (let k: number = 0; k < this.content?.body?.length; k += 1) {
      const i: ProgramStatement = this.content.body[k] as ProgramStatement;
      if (i?.type === 'ExportNamedDeclaration' && i?.declaration?.type === 'ClassDeclaration') {
        for (let dk: number = 0; dk < i?.declaration?.decorators?.length; dk += 1) {
          const decorator: Decorator = i.declaration.decorators[dk] as Decorator;
          if (
            decorator?.type === 'Decorator' &&
            decorator?.expression?.callee?.type === 'Identifier' &&
            ['NgModule', 'Component', 'Injectable', 'Directive', 'Pipe'].includes(decorator?.expression?.callee?.name)
          ) {
            for (let pk: number = 0; pk < decorator?.expression?.arguments?.length; pk += 1) {
              const objExp: ObjectExpression = decorator?.expression?.arguments[pk] as ObjectExpression;
              if (objExp?.properties?.length && objExp?.properties?.every((p) => p.type === 'Property')) {
                if (this.options.RemoveNgDecoratorEmptyArrayProperties) {
                  objExp.properties = objExp.properties.filter((p) => {
                    if (p?.value?.type !== 'ArrayExpression') return true;
                    return p?.value?.elements?.length;
                  });
                }

                this.sort(objExp?.properties, decorator?.expression?.callee?.name);
              }
            }
          }
        }
      }
    }

    return this.content;
  }

  private uKeys(decorator: string): string[] {
    let keys: string[] = [];
    switch (decorator) {
      case 'NgModule': {
        keys = this.options.NgModulePropertiesOrder;
        break;
      }

      case 'Component': {
        keys = this.options.ComponentPropertiesOrder;
        break;
      }

      case 'Injectable': {
        keys = this.options.InjectablePropertiesOrder;
        break;
      }

      case 'Directive': {
        keys = this.options.DirectivePropertiesOrder;
        break;
      }

      case 'Pipe': {
        keys = this.options.PipePropertiesOrder;
        break;
      }
    }

    return keys;
  }

  private sort(props: Property[], decorator: string): void {
    const uKeys: string[] = this.uKeys(decorator);
    props.sort((a, b) => {
      const ai: number = uKeys.indexOf(a.key.name);
      const bi: number = uKeys.indexOf(b.key.name);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai > -1) return -1;
      else if (bi > -1) return 1;
      else return 0;
    });
  }
}
