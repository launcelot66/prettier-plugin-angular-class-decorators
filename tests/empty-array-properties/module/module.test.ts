import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@NgModule', () => {
  describe('removeProperties', () => {
    it('should remove empty array properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        source: 'unformatted.ts',
        target: 'formatted.ts',
        formatOptions: {
          RemoveNgDecoratorEmptyArrayProperties: true,
          NgModulePropertiesOrder: ['id', 'jit', 'providers', 'declarations', 'bootstrap', 'exports'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
