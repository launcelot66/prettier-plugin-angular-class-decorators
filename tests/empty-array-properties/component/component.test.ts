import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Component', () => {
  describe('removeProperties', () => {
    it('should remove empty array properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        source: 'unformatted.ts',
        target: 'formatted.ts',
        formatOptions: {
          RemoveNgDecoratorEmptyArrayProperties: true,
          ComponentPropertiesOrder: [
            'standalone',
            'jit',
            'preserveWhitespaces',
            'selector',
            'exportAs',
            'templateUrl',
            'styles',
            'styleUrl',
            'styleUrls',
            'encapsulation',
            'changeDetection',
            'imports',
            'providers',
            'viewProviders',
            'host',
            'schemas',
            'animations',
            'inputs',
            'outputs',
            'queries',
            'hostDirectives',
          ],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
