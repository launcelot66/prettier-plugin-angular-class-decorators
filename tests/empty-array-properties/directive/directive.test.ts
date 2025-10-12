import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Directive', () => {
  describe('removeProperties', () => {
    it('should remove empty array properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        source: 'unformatted.ts',
        target: 'formatted.ts',
        formatOptions: {
          RemoveNgDecoratorEmptyArrayProperties: true,
          DirectivePropertiesOrder: ['standalone', 'jit', 'selector', 'exportAs', 'providers', 'host'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
