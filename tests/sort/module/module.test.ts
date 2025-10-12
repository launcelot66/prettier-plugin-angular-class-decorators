import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@NgModule', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          NgModulePropertiesOrder: ['id', 'jit', 'imports', 'providers', 'declarations', 'bootstrap', 'exports', 'schemas'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
