import { compareFiles } from 'tests/common';
import { describe, expect, it } from 'vitest';

describe('@Directive', () => {
  describe('sortProperties', () => {
    it('should sort properties', async () => {
      const { actual, expected } = await compareFiles(import.meta.url, {
        formatOptions: {
          DirectivePropertiesOrder: [
            'standalone',
            'jit',
            'selector',
            'exportAs',
            'providers',
            'host',
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
