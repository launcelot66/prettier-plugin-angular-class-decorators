import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Pipe', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          PipePropertiesOrder: ['name', 'pure', 'standalone'],
        },
      });
      expect(actual).toBe(expected);
    });
  });
});
