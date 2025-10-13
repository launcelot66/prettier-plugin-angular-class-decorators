import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import type { Options, SupportOptions } from 'prettier';
import { format } from 'prettier';
import { plugin } from '../src';

/**
 * Options for `compareFiles`.
 */
export interface CompareFilesOptions {
  /**
   * Name of the source code file. Default `'unsorted.ts'`.
   */
  source?: string;
  /**
   * Name of the target code file. Default `'sorted.ts'`.
   *
   * Pass `null` to explicitly only check the given source.
   */
  target?: string | null;
  /**
   * Further format options.
   *
   * You can also override the `parser` and `plugins` key.
   *
   * @default { parser: 'ngcdp', plugins: [plugin] }
   */
  formatOptions?: Options;
}

/**
 * Result of the comparison.
 */
export interface CompareFilesResult {
  /**
   * The code of the target file.
   *
   * `null` if target was also `null`.
   */
  readonly expected: string | null;
  /**
   * The code of the source file.
   */
  readonly code: string;
  /**
   * The actual formatted result.
   */
  readonly actual: string;
}

/**
 * Compare two files with each other and returns the result to be passed in expect calls.
 *
 * @param metaUrl Pass `import.meta.url`, so the function can relative resolve the files.
 * @param param1 Compare options.
 * @param param1.source The source file. Default `'unsorted.ts'`.
 * @param param1.target The target file. Default `'sorted.ts'`. Pass `null` to explicitly only check the given source.
 * @param param1.formatOptions Further format options. Default `{ parser: 'pug', plugins: [plugin] }`. You can also override the parser and plugins key.
 * @returns The result to be passed in expect calls.
 */
export async function compareFiles(
  metaUrl: string,
  { source = 'unsorted.ts', target = 'sorted.ts', formatOptions = {} }: CompareFilesOptions = {},
): Promise<CompareFilesResult> {
  const dirname: string = fileURLToPath(new URL('.', metaUrl));
  const expected: string | null = target ? readFileSync(resolve(dirname, target), 'utf8') : null;
  const code: string = readFileSync(resolve(dirname, source), 'utf8');
  const actual: string = await format(code, {
    parser: 'ngcdp',
    plugins: [plugin],
    ...formatOptions,
  });
  return { expected, code, actual };
}
